import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetUserActionEnum {
    GetUser = "GetUser"
}
export declare enum PostGetUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetUserQueryParams extends SpeakeasyBase {
    action: PostGetUserActionEnum;
    version: PostGetUserVersionEnum;
}
export declare class PostGetUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetUserRequest extends SpeakeasyBase {
    queryParams: PostGetUserQueryParams;
    headers: PostGetUserHeaders;
    request?: Uint8Array;
}
export declare class PostGetUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
