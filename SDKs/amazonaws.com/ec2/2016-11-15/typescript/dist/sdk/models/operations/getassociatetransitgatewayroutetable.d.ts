import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateTransitGatewayRouteTableActionEnum {
    AssociateTransitGatewayRouteTable = "AssociateTransitGatewayRouteTable"
}
export declare enum GetAssociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: GetAssociateTransitGatewayRouteTableActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    transitGatewayRouteTableId: string;
    version: GetAssociateTransitGatewayRouteTableVersionEnum;
}
export declare class GetAssociateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: GetAssociateTransitGatewayRouteTableQueryParams;
    headers: GetAssociateTransitGatewayRouteTableHeaders;
}
export declare class GetAssociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
