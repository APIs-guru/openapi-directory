import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachVpnGatewayActionEnum {
    AttachVpnGateway = "AttachVpnGateway"
}
export declare enum GetAttachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAttachVpnGatewayQueryParams extends SpeakeasyBase {
    action: GetAttachVpnGatewayActionEnum;
    dryRun?: boolean;
    version: GetAttachVpnGatewayVersionEnum;
    vpcId: string;
    vpnGatewayId: string;
}
export declare class GetAttachVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachVpnGatewayRequest extends SpeakeasyBase {
    queryParams: GetAttachVpnGatewayQueryParams;
    headers: GetAttachVpnGatewayHeaders;
}
export declare class GetAttachVpnGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
