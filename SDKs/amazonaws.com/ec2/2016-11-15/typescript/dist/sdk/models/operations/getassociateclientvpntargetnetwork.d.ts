import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateClientVpnTargetNetworkActionEnum {
    AssociateClientVpnTargetNetwork = "AssociateClientVpnTargetNetwork"
}
export declare enum GetAssociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: GetAssociateClientVpnTargetNetworkActionEnum;
    clientToken?: string;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    subnetId: string;
    version: GetAssociateClientVpnTargetNetworkVersionEnum;
}
export declare class GetAssociateClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: GetAssociateClientVpnTargetNetworkQueryParams;
    headers: GetAssociateClientVpnTargetNetworkHeaders;
}
export declare class GetAssociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
