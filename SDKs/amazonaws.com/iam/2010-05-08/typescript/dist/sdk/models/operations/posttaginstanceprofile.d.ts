import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagInstanceProfileActionEnum {
    TagInstanceProfile = "TagInstanceProfile"
}
export declare enum PostTagInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostTagInstanceProfileActionEnum;
    version: PostTagInstanceProfileVersionEnum;
}
export declare class PostTagInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostTagInstanceProfileQueryParams;
    headers: PostTagInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostTagInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
