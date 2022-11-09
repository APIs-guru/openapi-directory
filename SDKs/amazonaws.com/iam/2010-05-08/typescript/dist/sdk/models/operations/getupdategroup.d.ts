import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateGroupActionEnum {
    UpdateGroup = "UpdateGroup"
}
export declare enum GetUpdateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateGroupQueryParams extends SpeakeasyBase {
    action: GetUpdateGroupActionEnum;
    groupName: string;
    newGroupName?: string;
    newPath?: string;
    version: GetUpdateGroupVersionEnum;
}
export declare class GetUpdateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateGroupRequest extends SpeakeasyBase {
    queryParams: GetUpdateGroupQueryParams;
    headers: GetUpdateGroupHeaders;
}
export declare class GetUpdateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
