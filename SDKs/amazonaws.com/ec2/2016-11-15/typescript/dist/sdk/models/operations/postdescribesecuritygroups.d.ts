import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSecurityGroupsActionEnum {
    DescribeSecurityGroups = "DescribeSecurityGroups"
}
export declare enum PostDescribeSecurityGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeSecurityGroupsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSecurityGroupsVersionEnum;
}
export declare class PostDescribeSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSecurityGroupsQueryParams;
    headers: PostDescribeSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
