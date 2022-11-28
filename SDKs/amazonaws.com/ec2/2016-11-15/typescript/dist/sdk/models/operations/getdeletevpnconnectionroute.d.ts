import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteVpnConnectionRouteActionEnum {
    DeleteVpnConnectionRoute = "DeleteVpnConnectionRoute"
}
export declare enum GetDeleteVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpnConnectionRouteQueryParams extends SpeakeasyBase {
    action: GetDeleteVpnConnectionRouteActionEnum;
    destinationCidrBlock: string;
    version: GetDeleteVpnConnectionRouteVersionEnum;
    vpnConnectionId: string;
}
export declare class GetDeleteVpnConnectionRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpnConnectionRouteRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpnConnectionRouteQueryParams;
    headers: GetDeleteVpnConnectionRouteHeaders;
}
export declare class GetDeleteVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
