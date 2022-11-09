import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteClientVpnEndpointActionEnum {
    DeleteClientVpnEndpoint = "DeleteClientVpnEndpoint"
}
export declare enum GetDeleteClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteClientVpnEndpointQueryParams extends SpeakeasyBase {
    action: GetDeleteClientVpnEndpointActionEnum;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    version: GetDeleteClientVpnEndpointVersionEnum;
}
export declare class GetDeleteClientVpnEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClientVpnEndpointRequest extends SpeakeasyBase {
    queryParams: GetDeleteClientVpnEndpointQueryParams;
    headers: GetDeleteClientVpnEndpointHeaders;
}
export declare class GetDeleteClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
