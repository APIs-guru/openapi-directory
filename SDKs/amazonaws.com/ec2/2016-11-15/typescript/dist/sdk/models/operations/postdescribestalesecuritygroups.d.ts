import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeStaleSecurityGroupsActionEnum {
    DescribeStaleSecurityGroups = "DescribeStaleSecurityGroups"
}
export declare enum PostDescribeStaleSecurityGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeStaleSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeStaleSecurityGroupsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeStaleSecurityGroupsVersionEnum;
}
export declare class PostDescribeStaleSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeStaleSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeStaleSecurityGroupsQueryParams;
    headers: PostDescribeStaleSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeStaleSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
