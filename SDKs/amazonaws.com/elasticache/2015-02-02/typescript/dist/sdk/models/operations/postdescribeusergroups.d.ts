import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeUserGroupsActionEnum {
    DescribeUserGroups = "DescribeUserGroups"
}
export declare enum PostDescribeUserGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeUserGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeUserGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeUserGroupsVersionEnum;
}
export declare class PostDescribeUserGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeUserGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeUserGroupsQueryParams;
    headers: PostDescribeUserGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeUserGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
