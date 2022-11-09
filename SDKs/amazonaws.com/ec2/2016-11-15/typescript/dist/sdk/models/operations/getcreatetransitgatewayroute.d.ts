import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateTransitGatewayRouteActionEnum {
    CreateTransitGatewayRoute = "CreateTransitGatewayRoute"
}
export declare enum GetCreateTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateTransitGatewayRouteQueryParams extends SpeakeasyBase {
    action: GetCreateTransitGatewayRouteActionEnum;
    blackhole?: boolean;
    destinationCidrBlock: string;
    dryRun?: boolean;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
    version: GetCreateTransitGatewayRouteVersionEnum;
}
export declare class GetCreateTransitGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateTransitGatewayRouteRequest extends SpeakeasyBase {
    queryParams: GetCreateTransitGatewayRouteQueryParams;
    headers: GetCreateTransitGatewayRouteHeaders;
}
export declare class GetCreateTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
