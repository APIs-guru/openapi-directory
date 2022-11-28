import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteCarrierGatewayActionEnum {
    DeleteCarrierGateway = "DeleteCarrierGateway"
}
export declare enum GetDeleteCarrierGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteCarrierGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteCarrierGatewayActionEnum;
    carrierGatewayId: string;
    dryRun?: boolean;
    version: GetDeleteCarrierGatewayVersionEnum;
}
export declare class GetDeleteCarrierGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCarrierGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteCarrierGatewayQueryParams;
    headers: GetDeleteCarrierGatewayHeaders;
}
export declare class GetDeleteCarrierGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
