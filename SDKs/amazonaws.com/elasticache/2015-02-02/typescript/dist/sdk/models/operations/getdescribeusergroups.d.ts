import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeUserGroupsActionEnum {
    DescribeUserGroups = "DescribeUserGroups"
}
export declare enum GetDescribeUserGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeUserGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeUserGroupsActionEnum;
    marker?: string;
    maxRecords?: number;
    userGroupId?: string;
    version: GetDescribeUserGroupsVersionEnum;
}
export declare class GetDescribeUserGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeUserGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeUserGroupsQueryParams;
    headers: GetDescribeUserGroupsHeaders;
}
export declare class GetDescribeUserGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
