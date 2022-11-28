import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableTransitGatewayRouteTablePropagationActionEnum {
    EnableTransitGatewayRouteTablePropagation = "EnableTransitGatewayRouteTablePropagation"
}
export declare enum GetEnableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableTransitGatewayRouteTablePropagationQueryParams extends SpeakeasyBase {
    action: GetEnableTransitGatewayRouteTablePropagationActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    transitGatewayRouteTableId: string;
    version: GetEnableTransitGatewayRouteTablePropagationVersionEnum;
}
export declare class GetEnableTransitGatewayRouteTablePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    queryParams: GetEnableTransitGatewayRouteTablePropagationQueryParams;
    headers: GetEnableTransitGatewayRouteTablePropagationHeaders;
}
export declare class GetEnableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
