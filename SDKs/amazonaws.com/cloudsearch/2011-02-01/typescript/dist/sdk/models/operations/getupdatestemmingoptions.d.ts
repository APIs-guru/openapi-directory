import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateStemmingOptionsActionEnum {
    UpdateStemmingOptions = "UpdateStemmingOptions"
}
export declare enum GetUpdateStemmingOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetUpdateStemmingOptionsQueryParams extends SpeakeasyBase {
    action: GetUpdateStemmingOptionsActionEnum;
    domainName: string;
    stems: string;
    version: GetUpdateStemmingOptionsVersionEnum;
}
export declare class GetUpdateStemmingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateStemmingOptionsRequest extends SpeakeasyBase {
    queryParams: GetUpdateStemmingOptionsQueryParams;
    headers: GetUpdateStemmingOptionsHeaders;
}
export declare class GetUpdateStemmingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
