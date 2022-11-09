import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateApplicationVersionActionEnum {
    UpdateApplicationVersion = "UpdateApplicationVersion"
}
export declare enum GetUpdateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateApplicationVersionQueryParams extends SpeakeasyBase {
    action: GetUpdateApplicationVersionActionEnum;
    applicationName: string;
    description?: string;
    version: GetUpdateApplicationVersionVersionEnum;
    versionLabel: string;
}
export declare class GetUpdateApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateApplicationVersionRequest extends SpeakeasyBase {
    queryParams: GetUpdateApplicationVersionQueryParams;
    headers: GetUpdateApplicationVersionHeaders;
}
export declare class GetUpdateApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
