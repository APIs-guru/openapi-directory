import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCopyImageActionEnum {
    CopyImage = "CopyImage"
}
export declare enum PostCopyImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCopyImageQueryParams extends SpeakeasyBase {
    action: PostCopyImageActionEnum;
    version: PostCopyImageVersionEnum;
}
export declare class PostCopyImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyImageRequest extends SpeakeasyBase {
    queryParams: PostCopyImageQueryParams;
    headers: PostCopyImageHeaders;
    request?: Uint8Array;
}
export declare class PostCopyImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
