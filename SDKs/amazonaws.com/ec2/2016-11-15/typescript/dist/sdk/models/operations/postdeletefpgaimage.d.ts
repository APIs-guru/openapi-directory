import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteFpgaImageActionEnum {
    DeleteFpgaImage = "DeleteFpgaImage"
}
export declare enum PostDeleteFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteFpgaImageQueryParams extends SpeakeasyBase {
    action: PostDeleteFpgaImageActionEnum;
    version: PostDeleteFpgaImageVersionEnum;
}
export declare class PostDeleteFpgaImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteFpgaImageRequest extends SpeakeasyBase {
    queryParams: PostDeleteFpgaImageQueryParams;
    headers: PostDeleteFpgaImageHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
