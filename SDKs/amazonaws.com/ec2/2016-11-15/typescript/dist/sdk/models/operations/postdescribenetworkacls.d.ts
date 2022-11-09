import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNetworkAclsActionEnum {
    DescribeNetworkAcls = "DescribeNetworkAcls"
}
export declare enum PostDescribeNetworkAclsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkAclsQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkAclsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNetworkAclsVersionEnum;
}
export declare class PostDescribeNetworkAclsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkAclsRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkAclsQueryParams;
    headers: PostDescribeNetworkAclsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkAclsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
