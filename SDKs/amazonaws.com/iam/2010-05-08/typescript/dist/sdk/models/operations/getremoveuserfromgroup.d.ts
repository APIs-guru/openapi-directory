import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveUserFromGroupActionEnum {
    RemoveUserFromGroup = "RemoveUserFromGroup"
}
export declare enum GetRemoveUserFromGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetRemoveUserFromGroupQueryParams extends SpeakeasyBase {
    action: GetRemoveUserFromGroupActionEnum;
    groupName: string;
    userName: string;
    version: GetRemoveUserFromGroupVersionEnum;
}
export declare class GetRemoveUserFromGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveUserFromGroupRequest extends SpeakeasyBase {
    queryParams: GetRemoveUserFromGroupQueryParams;
    headers: GetRemoveUserFromGroupHeaders;
}
export declare class GetRemoveUserFromGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
