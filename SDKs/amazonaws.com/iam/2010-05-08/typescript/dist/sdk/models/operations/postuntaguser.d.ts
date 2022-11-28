import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUntagUserActionEnum {
    UntagUser = "UntagUser"
}
export declare enum PostUntagUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagUserQueryParams extends SpeakeasyBase {
    action: PostUntagUserActionEnum;
    version: PostUntagUserVersionEnum;
}
export declare class PostUntagUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagUserRequest extends SpeakeasyBase {
    queryParams: PostUntagUserQueryParams;
    headers: PostUntagUserHeaders;
    request?: Uint8Array;
}
export declare class PostUntagUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
