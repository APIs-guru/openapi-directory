import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyUserGroupActionEnum {
    ModifyUserGroup = "ModifyUserGroup"
}
export declare enum GetModifyUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetModifyUserGroupQueryParams extends SpeakeasyBase {
    action: GetModifyUserGroupActionEnum;
    userGroupId: string;
    userIdsToAdd?: string[];
    userIdsToRemove?: string[];
    version: GetModifyUserGroupVersionEnum;
}
export declare class GetModifyUserGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyUserGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyUserGroupQueryParams;
    headers: GetModifyUserGroupHeaders;
}
export declare class GetModifyUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
