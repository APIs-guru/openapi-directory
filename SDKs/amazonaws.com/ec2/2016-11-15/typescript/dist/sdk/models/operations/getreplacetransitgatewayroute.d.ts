import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReplaceTransitGatewayRouteActionEnum {
    ReplaceTransitGatewayRoute = "ReplaceTransitGatewayRoute"
}
export declare enum GetReplaceTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: GetReplaceTransitGatewayRouteActionEnum;
    blackhole?: boolean;
    destinationCidrBlock: string;
    dryRun?: boolean;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
    version: GetReplaceTransitGatewayRouteVersionEnum;
}
export declare class GetReplaceTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: GetReplaceTransitGatewayRouteQueryParams;
    headers: GetReplaceTransitGatewayRouteHeaders;
}
export declare class GetReplaceTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
