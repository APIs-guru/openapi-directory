import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum {
    DescribeLocalGatewayRouteTableVpcAssociations = "DescribeLocalGatewayRouteTableVpcAssociations"
}
export declare enum PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum;
}
export declare class PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewayRouteTableVpcAssociationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams;
    headers: PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewayRouteTableVpcAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
