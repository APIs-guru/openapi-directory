import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum {
    DescribeLocalGatewayVirtualInterfaceGroups = "DescribeLocalGatewayVirtualInterfaceGroups"
}
export declare enum PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum;
}
export declare class PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewayVirtualInterfaceGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams;
    headers: PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewayVirtualInterfaceGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
