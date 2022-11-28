import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyUserGroupActionEnum {
    ModifyUserGroup = "ModifyUserGroup"
}
export declare enum PostModifyUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyUserGroupQueryParams extends SpeakeasyBase {
    action: PostModifyUserGroupActionEnum;
    version: PostModifyUserGroupVersionEnum;
}
export declare class PostModifyUserGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyUserGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyUserGroupQueryParams;
    headers: PostModifyUserGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
