import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteUserGroupActionEnum {
    DeleteUserGroup = "DeleteUserGroup"
}
export declare enum PostDeleteUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteUserGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteUserGroupActionEnum;
    version: PostDeleteUserGroupVersionEnum;
}
export declare class PostDeleteUserGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteUserGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteUserGroupQueryParams;
    headers: PostDeleteUserGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
