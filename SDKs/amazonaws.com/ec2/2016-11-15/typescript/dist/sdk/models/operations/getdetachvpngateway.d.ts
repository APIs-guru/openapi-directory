import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDetachVpnGatewayActionEnum {
    DetachVpnGateway = "DetachVpnGateway"
}
export declare enum GetDetachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDetachVpnGatewayQueryParams extends SpeakeasyBase {
    action: GetDetachVpnGatewayActionEnum;
    dryRun?: boolean;
    version: GetDetachVpnGatewayVersionEnum;
    vpcId: string;
    vpnGatewayId: string;
}
export declare class GetDetachVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachVpnGatewayRequest extends SpeakeasyBase {
    queryParams: GetDetachVpnGatewayQueryParams;
    headers: GetDetachVpnGatewayHeaders;
}
export declare class GetDetachVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
