import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum {
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"
}
export declare enum PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum;
}
export declare class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams;
    headers: PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
