import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLocalGatewayVirtualInterfacesActionEnum {
    DescribeLocalGatewayVirtualInterfaces = "DescribeLocalGatewayVirtualInterfaces"
}
export declare enum PostDescribeLocalGatewayVirtualInterfacesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewayVirtualInterfacesQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewayVirtualInterfacesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewayVirtualInterfacesVersionEnum;
}
export declare class PostDescribeLocalGatewayVirtualInterfacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewayVirtualInterfacesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewayVirtualInterfacesQueryParams;
    headers: PostDescribeLocalGatewayVirtualInterfacesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewayVirtualInterfacesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
