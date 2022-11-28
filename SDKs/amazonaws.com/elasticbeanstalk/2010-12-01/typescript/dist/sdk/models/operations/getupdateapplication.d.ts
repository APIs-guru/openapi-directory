import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateApplicationActionEnum {
    UpdateApplication = "UpdateApplication"
}
export declare enum GetUpdateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateApplicationQueryParams extends SpeakeasyBase {
    action: GetUpdateApplicationActionEnum;
    applicationName: string;
    description?: string;
    version: GetUpdateApplicationVersionEnum;
}
export declare class GetUpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateApplicationRequest extends SpeakeasyBase {
    queryParams: GetUpdateApplicationQueryParams;
    headers: GetUpdateApplicationHeaders;
}
export declare class GetUpdateApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
