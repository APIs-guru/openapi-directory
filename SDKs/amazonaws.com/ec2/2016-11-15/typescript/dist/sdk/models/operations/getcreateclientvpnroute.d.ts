import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateClientVpnRouteActionEnum {
    CreateClientVpnRoute = "CreateClientVpnRoute"
}
export declare enum GetCreateClientVpnRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateClientVpnRouteQueryParams extends SpeakeasyBase {
    action: GetCreateClientVpnRouteActionEnum;
    clientToken?: string;
    clientVpnEndpointId: string;
    description?: string;
    destinationCidrBlock: string;
    dryRun?: boolean;
    targetVpcSubnetId: string;
    version: GetCreateClientVpnRouteVersionEnum;
}
export declare class GetCreateClientVpnRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateClientVpnRouteRequest extends SpeakeasyBase {
    queryParams: GetCreateClientVpnRouteQueryParams;
    headers: GetCreateClientVpnRouteHeaders;
}
export declare class GetCreateClientVpnRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
