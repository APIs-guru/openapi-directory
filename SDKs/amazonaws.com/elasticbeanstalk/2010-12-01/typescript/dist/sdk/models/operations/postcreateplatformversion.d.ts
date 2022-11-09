import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreatePlatformVersionActionEnum {
    CreatePlatformVersion = "CreatePlatformVersion"
}
export declare enum PostCreatePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreatePlatformVersionQueryParams extends SpeakeasyBase {
    action: PostCreatePlatformVersionActionEnum;
    version: PostCreatePlatformVersionVersionEnum;
}
export declare class PostCreatePlatformVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreatePlatformVersionRequest extends SpeakeasyBase {
    queryParams: PostCreatePlatformVersionQueryParams;
    headers: PostCreatePlatformVersionHeaders;
    request?: Uint8Array;
}
export declare class PostCreatePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
