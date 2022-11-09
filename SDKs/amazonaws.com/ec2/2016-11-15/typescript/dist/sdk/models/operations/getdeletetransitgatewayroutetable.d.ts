import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTransitGatewayRouteTableActionEnum {
    DeleteTransitGatewayRouteTable = "DeleteTransitGatewayRouteTable"
}
export declare enum GetDeleteTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayRouteTableActionEnum;
    dryRun?: boolean;
    transitGatewayRouteTableId: string;
    version: GetDeleteTransitGatewayRouteTableVersionEnum;
}
export declare class GetDeleteTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayRouteTableQueryParams;
    headers: GetDeleteTransitGatewayRouteTableHeaders;
}
export declare class GetDeleteTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
