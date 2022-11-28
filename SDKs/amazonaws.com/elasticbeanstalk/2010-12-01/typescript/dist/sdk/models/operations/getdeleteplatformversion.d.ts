import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}
export declare enum GetDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeletePlatformVersionQueryParams extends SpeakeasyBase {
    action: GetDeletePlatformVersionActionEnum;
    platformArn?: string;
    version: GetDeletePlatformVersionVersionEnum;
}
export declare class GetDeletePlatformVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeletePlatformVersionRequest extends SpeakeasyBase {
    queryParams: GetDeletePlatformVersionQueryParams;
    headers: GetDeletePlatformVersionHeaders;
}
export declare class GetDeletePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
