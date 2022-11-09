import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListGroupsForUserActionEnum {
    ListGroupsForUser = "ListGroupsForUser"
}
export declare enum GetListGroupsForUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListGroupsForUserQueryParams extends SpeakeasyBase {
    action: GetListGroupsForUserActionEnum;
    marker?: string;
    maxItems?: number;
    userName: string;
    version: GetListGroupsForUserVersionEnum;
}
export declare class GetListGroupsForUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListGroupsForUserRequest extends SpeakeasyBase {
    queryParams: GetListGroupsForUserQueryParams;
    headers: GetListGroupsForUserHeaders;
}
export declare class GetListGroupsForUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
