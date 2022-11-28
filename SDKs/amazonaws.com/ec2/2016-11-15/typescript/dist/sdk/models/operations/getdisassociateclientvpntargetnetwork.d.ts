import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateClientVpnTargetNetworkActionEnum {
    DisassociateClientVpnTargetNetwork = "DisassociateClientVpnTargetNetwork"
}
export declare enum GetDisassociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: GetDisassociateClientVpnTargetNetworkActionEnum;
    associationId: string;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    version: GetDisassociateClientVpnTargetNetworkVersionEnum;
}
export declare class GetDisassociateClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: GetDisassociateClientVpnTargetNetworkQueryParams;
    headers: GetDisassociateClientVpnTargetNetworkHeaders;
}
export declare class GetDisassociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
