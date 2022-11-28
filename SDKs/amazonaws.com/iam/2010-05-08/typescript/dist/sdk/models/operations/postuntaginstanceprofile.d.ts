import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUntagInstanceProfileActionEnum {
    UntagInstanceProfile = "UntagInstanceProfile"
}
export declare enum PostUntagInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostUntagInstanceProfileActionEnum;
    version: PostUntagInstanceProfileVersionEnum;
}
export declare class PostUntagInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostUntagInstanceProfileQueryParams;
    headers: PostUntagInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostUntagInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
