import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTransitGatewayActionEnum {
    DeleteTransitGateway = "DeleteTransitGateway"
}
export declare enum GetDeleteTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayActionEnum;
    dryRun?: boolean;
    transitGatewayId: string;
    version: GetDeleteTransitGatewayVersionEnum;
}
export declare class GetDeleteTransitGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayQueryParams;
    headers: GetDeleteTransitGatewayHeaders;
}
export declare class GetDeleteTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
