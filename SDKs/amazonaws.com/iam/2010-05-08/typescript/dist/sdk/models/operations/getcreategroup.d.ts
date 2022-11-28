import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateGroupActionEnum {
    CreateGroup = "CreateGroup"
}
export declare enum GetCreateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateGroupQueryParams extends SpeakeasyBase {
    action: GetCreateGroupActionEnum;
    groupName: string;
    path?: string;
    version: GetCreateGroupVersionEnum;
}
export declare class GetCreateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateGroupQueryParams;
    headers: GetCreateGroupHeaders;
}
export declare class GetCreateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
