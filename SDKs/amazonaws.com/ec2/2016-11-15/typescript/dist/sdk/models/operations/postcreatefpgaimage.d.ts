import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateFpgaImageActionEnum {
    CreateFpgaImage = "CreateFpgaImage"
}
export declare enum PostCreateFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateFpgaImageQueryParams extends SpeakeasyBase {
    action: PostCreateFpgaImageActionEnum;
    version: PostCreateFpgaImageVersionEnum;
}
export declare class PostCreateFpgaImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateFpgaImageRequest extends SpeakeasyBase {
    queryParams: PostCreateFpgaImageQueryParams;
    headers: PostCreateFpgaImageHeaders;
    request?: Uint8Array;
}
export declare class PostCreateFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
