import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum {
    DeleteLocalGatewayRouteTableVpcAssociation = "DeleteLocalGatewayRouteTableVpcAssociation"
}
export declare enum GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams extends SpeakeasyBase {
    action: GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum;
    dryRun?: boolean;
    localGatewayRouteTableVpcAssociationId: string;
    version: GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum;
}
export declare class GetDeleteLocalGatewayRouteTableVpcAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLocalGatewayRouteTableVpcAssociationRequest extends SpeakeasyBase {
    queryParams: GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams;
    headers: GetDeleteLocalGatewayRouteTableVpcAssociationHeaders;
}
export declare class GetDeleteLocalGatewayRouteTableVpcAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
