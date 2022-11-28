import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteGroupActionEnum {
    DeleteGroup = "DeleteGroup"
}
export declare enum GetDeleteGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteGroupActionEnum;
    groupName: string;
    version: GetDeleteGroupVersionEnum;
}
export declare class GetDeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteGroupQueryParams;
    headers: GetDeleteGroupHeaders;
}
export declare class GetDeleteGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
