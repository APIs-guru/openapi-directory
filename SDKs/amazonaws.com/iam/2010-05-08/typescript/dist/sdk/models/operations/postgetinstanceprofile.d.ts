import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetInstanceProfileActionEnum {
    GetInstanceProfile = "GetInstanceProfile"
}
export declare enum PostGetInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostGetInstanceProfileActionEnum;
    version: PostGetInstanceProfileVersionEnum;
}
export declare class PostGetInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostGetInstanceProfileQueryParams;
    headers: PostGetInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostGetInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
