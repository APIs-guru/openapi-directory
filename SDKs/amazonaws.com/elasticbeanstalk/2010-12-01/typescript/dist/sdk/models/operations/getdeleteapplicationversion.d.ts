import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteApplicationVersionActionEnum {
    DeleteApplicationVersion = "DeleteApplicationVersion"
}
export declare enum GetDeleteApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteApplicationVersionQueryParams extends SpeakeasyBase {
    action: GetDeleteApplicationVersionActionEnum;
    applicationName: string;
    deleteSourceBundle?: boolean;
    version: GetDeleteApplicationVersionVersionEnum;
    versionLabel: string;
}
export declare class GetDeleteApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteApplicationVersionRequest extends SpeakeasyBase {
    queryParams: GetDeleteApplicationVersionQueryParams;
    headers: GetDeleteApplicationVersionHeaders;
}
export declare class GetDeleteApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
