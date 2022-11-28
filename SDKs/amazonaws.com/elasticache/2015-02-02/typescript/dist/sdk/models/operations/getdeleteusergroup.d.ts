import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteUserGroupActionEnum {
    DeleteUserGroup = "DeleteUserGroup"
}
export declare enum GetDeleteUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteUserGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteUserGroupActionEnum;
    userGroupId: string;
    version: GetDeleteUserGroupVersionEnum;
}
export declare class GetDeleteUserGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteUserGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteUserGroupQueryParams;
    headers: GetDeleteUserGroupHeaders;
}
export declare class GetDeleteUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
