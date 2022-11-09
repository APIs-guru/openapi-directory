import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLocalGatewayRouteTableVpcAssociationActionEnum {
    CreateLocalGatewayRouteTableVpcAssociation = "CreateLocalGatewayRouteTableVpcAssociation"
}
export declare enum PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateLocalGatewayRouteTableVpcAssociationQueryParams extends SpeakeasyBase {
    action: PostCreateLocalGatewayRouteTableVpcAssociationActionEnum;
    version: PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum;
}
export declare class PostCreateLocalGatewayRouteTableVpcAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLocalGatewayRouteTableVpcAssociationRequest extends SpeakeasyBase {
    queryParams: PostCreateLocalGatewayRouteTableVpcAssociationQueryParams;
    headers: PostCreateLocalGatewayRouteTableVpcAssociationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLocalGatewayRouteTableVpcAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
