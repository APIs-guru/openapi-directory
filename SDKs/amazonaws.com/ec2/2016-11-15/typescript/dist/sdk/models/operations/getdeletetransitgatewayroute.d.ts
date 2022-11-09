import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTransitGatewayRouteActionEnum {
    DeleteTransitGatewayRoute = "DeleteTransitGatewayRoute"
}
export declare enum GetDeleteTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayRouteActionEnum;
    destinationCidrBlock: string;
    dryRun?: boolean;
    transitGatewayRouteTableId: string;
    version: GetDeleteTransitGatewayRouteVersionEnum;
}
export declare class GetDeleteTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayRouteQueryParams;
    headers: GetDeleteTransitGatewayRouteHeaders;
}
export declare class GetDeleteTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
