import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateUserActionEnum {
    CreateUser = "CreateUser"
}
export declare enum PostCreateUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateUserQueryParams extends SpeakeasyBase {
    action: PostCreateUserActionEnum;
    version: PostCreateUserVersionEnum;
}
export declare class PostCreateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateUserRequest extends SpeakeasyBase {
    queryParams: PostCreateUserQueryParams;
    headers: PostCreateUserHeaders;
    request?: Uint8Array;
}
export declare class PostCreateUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
