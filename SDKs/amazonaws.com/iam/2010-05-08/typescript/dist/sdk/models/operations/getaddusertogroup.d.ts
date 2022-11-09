import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAddUserToGroupActionEnum {
    AddUserToGroup = "AddUserToGroup"
}
export declare enum GetAddUserToGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAddUserToGroupQueryParams extends SpeakeasyBase {
    action: GetAddUserToGroupActionEnum;
    groupName: string;
    userName: string;
    version: GetAddUserToGroupVersionEnum;
}
export declare class GetAddUserToGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddUserToGroupRequest extends SpeakeasyBase {
    queryParams: GetAddUserToGroupQueryParams;
    headers: GetAddUserToGroupHeaders;
}
export declare class GetAddUserToGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
