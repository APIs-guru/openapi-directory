import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateUserGroupActionEnum {
    CreateUserGroup = "CreateUserGroup"
}
export declare enum PostCreateUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateUserGroupQueryParams extends SpeakeasyBase {
    action: PostCreateUserGroupActionEnum;
    version: PostCreateUserGroupVersionEnum;
}
export declare class PostCreateUserGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateUserGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateUserGroupQueryParams;
    headers: PostCreateUserGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
