import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateStopwordOptionsActionEnum {
    UpdateStopwordOptions = "UpdateStopwordOptions"
}
export declare enum GetUpdateStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetUpdateStopwordOptionsQueryParams extends SpeakeasyBase {
    action: GetUpdateStopwordOptionsActionEnum;
    domainName: string;
    stopwords: string;
    version: GetUpdateStopwordOptionsVersionEnum;
}
export declare class GetUpdateStopwordOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateStopwordOptionsRequest extends SpeakeasyBase {
    queryParams: GetUpdateStopwordOptionsQueryParams;
    headers: GetUpdateStopwordOptionsHeaders;
}
export declare class GetUpdateStopwordOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
