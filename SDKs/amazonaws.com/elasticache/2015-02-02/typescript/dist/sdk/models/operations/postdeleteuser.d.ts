import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteUserActionEnum {
    DeleteUser = "DeleteUser"
}
export declare enum PostDeleteUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteUserQueryParams extends SpeakeasyBase {
    action: PostDeleteUserActionEnum;
    version: PostDeleteUserVersionEnum;
}
export declare class PostDeleteUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteUserRequest extends SpeakeasyBase {
    queryParams: PostDeleteUserQueryParams;
    headers: PostDeleteUserHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
