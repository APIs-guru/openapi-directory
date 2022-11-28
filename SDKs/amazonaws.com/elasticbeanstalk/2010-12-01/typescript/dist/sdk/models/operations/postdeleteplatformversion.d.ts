import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}
export declare enum PostDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeletePlatformVersionQueryParams extends SpeakeasyBase {
    action: PostDeletePlatformVersionActionEnum;
    version: PostDeletePlatformVersionVersionEnum;
}
export declare class PostDeletePlatformVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeletePlatformVersionRequest extends SpeakeasyBase {
    queryParams: PostDeletePlatformVersionQueryParams;
    headers: PostDeletePlatformVersionHeaders;
    request?: Uint8Array;
}
export declare class PostDeletePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
