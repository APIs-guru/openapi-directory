import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateTransitGatewayRouteTableActionEnum {
    DisassociateTransitGatewayRouteTable = "DisassociateTransitGatewayRouteTable"
}
export declare enum GetDisassociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: GetDisassociateTransitGatewayRouteTableActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    transitGatewayRouteTableId: string;
    version: GetDisassociateTransitGatewayRouteTableVersionEnum;
}
export declare class GetDisassociateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: GetDisassociateTransitGatewayRouteTableQueryParams;
    headers: GetDisassociateTransitGatewayRouteTableHeaders;
}
export declare class GetDisassociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
