import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteApplicationActionEnum {
    DeleteApplication = "DeleteApplication"
}
export declare enum GetDeleteApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteApplicationQueryParams extends SpeakeasyBase {
    action: GetDeleteApplicationActionEnum;
    applicationName: string;
    terminateEnvByForce?: boolean;
    version: GetDeleteApplicationVersionEnum;
}
export declare class GetDeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteApplicationRequest extends SpeakeasyBase {
    queryParams: GetDeleteApplicationQueryParams;
    headers: GetDeleteApplicationHeaders;
}
export declare class GetDeleteApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
