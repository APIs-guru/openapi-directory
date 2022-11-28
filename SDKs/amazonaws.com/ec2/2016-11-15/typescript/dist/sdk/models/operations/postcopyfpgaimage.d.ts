import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopyFpgaImageActionEnum {
    CopyFpgaImage = "CopyFpgaImage"
}
export declare enum PostCopyFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCopyFpgaImageQueryParams extends SpeakeasyBase {
    action: PostCopyFpgaImageActionEnum;
    version: PostCopyFpgaImageVersionEnum;
}
export declare class PostCopyFpgaImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyFpgaImageRequest extends SpeakeasyBase {
    queryParams: PostCopyFpgaImageQueryParams;
    headers: PostCopyFpgaImageHeaders;
    request?: Uint8Array;
}
export declare class PostCopyFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
