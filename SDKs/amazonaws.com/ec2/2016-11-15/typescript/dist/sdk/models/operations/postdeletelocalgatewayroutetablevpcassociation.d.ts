import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum {
    DeleteLocalGatewayRouteTableVpcAssociation = "DeleteLocalGatewayRouteTableVpcAssociation"
}
export declare enum PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams extends SpeakeasyBase {
    action: PostDeleteLocalGatewayRouteTableVpcAssociationActionEnum;
    version: PostDeleteLocalGatewayRouteTableVpcAssociationVersionEnum;
}
export declare class PostDeleteLocalGatewayRouteTableVpcAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLocalGatewayRouteTableVpcAssociationRequest extends SpeakeasyBase {
    queryParams: PostDeleteLocalGatewayRouteTableVpcAssociationQueryParams;
    headers: PostDeleteLocalGatewayRouteTableVpcAssociationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLocalGatewayRouteTableVpcAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
