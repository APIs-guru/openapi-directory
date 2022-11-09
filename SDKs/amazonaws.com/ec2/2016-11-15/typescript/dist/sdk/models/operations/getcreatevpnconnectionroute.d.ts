import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateVpnConnectionRouteActionEnum {
    CreateVpnConnectionRoute = "CreateVpnConnectionRoute"
}
export declare enum GetCreateVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateVpnConnectionRouteQueryParams extends SpeakeasyBase {
    action: GetCreateVpnConnectionRouteActionEnum;
    destinationCidrBlock: string;
    version: GetCreateVpnConnectionRouteVersionEnum;
    vpnConnectionId: string;
}
export declare class GetCreateVpnConnectionRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateVpnConnectionRouteRequest extends SpeakeasyBase {
    queryParams: GetCreateVpnConnectionRouteQueryParams;
    headers: GetCreateVpnConnectionRouteHeaders;
}
export declare class GetCreateVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
