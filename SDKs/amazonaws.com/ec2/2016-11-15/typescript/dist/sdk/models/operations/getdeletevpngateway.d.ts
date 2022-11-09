import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVpnGatewayActionEnum {
    DeleteVpnGateway = "DeleteVpnGateway"
}
export declare enum GetDeleteVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpnGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteVpnGatewayActionEnum;
    dryRun?: boolean;
    version: GetDeleteVpnGatewayVersionEnum;
    vpnGatewayId: string;
}
export declare class GetDeleteVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpnGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpnGatewayQueryParams;
    headers: GetDeleteVpnGatewayHeaders;
}
export declare class GetDeleteVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
