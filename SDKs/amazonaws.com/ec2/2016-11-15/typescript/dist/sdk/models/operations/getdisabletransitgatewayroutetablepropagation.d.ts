import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableTransitGatewayRouteTablePropagationActionEnum {
    DisableTransitGatewayRouteTablePropagation = "DisableTransitGatewayRouteTablePropagation"
}
export declare enum GetDisableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableTransitGatewayRouteTablePropagationQueryParams extends SpeakeasyBase {
    action: GetDisableTransitGatewayRouteTablePropagationActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    transitGatewayRouteTableId: string;
    version: GetDisableTransitGatewayRouteTablePropagationVersionEnum;
}
export declare class GetDisableTransitGatewayRouteTablePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    queryParams: GetDisableTransitGatewayRouteTablePropagationQueryParams;
    headers: GetDisableTransitGatewayRouteTablePropagationHeaders;
}
export declare class GetDisableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
