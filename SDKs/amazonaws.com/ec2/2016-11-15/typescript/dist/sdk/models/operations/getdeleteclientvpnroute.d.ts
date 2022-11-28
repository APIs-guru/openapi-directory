import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteClientVpnRouteActionEnum {
    DeleteClientVpnRoute = "DeleteClientVpnRoute"
}
export declare enum GetDeleteClientVpnRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteClientVpnRouteQueryParams extends SpeakeasyBase {
    action: GetDeleteClientVpnRouteActionEnum;
    clientVpnEndpointId: string;
    destinationCidrBlock: string;
    dryRun?: boolean;
    targetVpcSubnetId?: string;
    version: GetDeleteClientVpnRouteVersionEnum;
}
export declare class GetDeleteClientVpnRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClientVpnRouteRequest extends SpeakeasyBase {
    queryParams: GetDeleteClientVpnRouteQueryParams;
    headers: GetDeleteClientVpnRouteHeaders;
}
export declare class GetDeleteClientVpnRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
