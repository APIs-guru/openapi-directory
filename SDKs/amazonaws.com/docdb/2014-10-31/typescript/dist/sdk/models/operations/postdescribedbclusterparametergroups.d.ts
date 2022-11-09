import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbClusterParameterGroupsActionEnum {
    DescribeDbClusterParameterGroups = "DescribeDBClusterParameterGroups"
}
export declare enum PostDescribeDbClusterParameterGroupsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterParameterGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterParameterGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClusterParameterGroupsVersionEnum;
}
export declare class PostDescribeDbClusterParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterParameterGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterParameterGroupsQueryParams;
    headers: PostDescribeDbClusterParameterGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
