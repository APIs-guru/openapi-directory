import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateImageActionEnum {
    CreateImage = "CreateImage"
}
export declare enum PostCreateImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateImageQueryParams extends SpeakeasyBase {
    action: PostCreateImageActionEnum;
    version: PostCreateImageVersionEnum;
}
export declare class PostCreateImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateImageRequest extends SpeakeasyBase {
    queryParams: PostCreateImageQueryParams;
    headers: PostCreateImageHeaders;
    request?: Uint8Array;
}
export declare class PostCreateImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
