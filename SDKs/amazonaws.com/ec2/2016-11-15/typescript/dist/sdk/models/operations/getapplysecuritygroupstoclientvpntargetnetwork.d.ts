import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum {
    ApplySecurityGroupsToClientVpnTargetNetwork = "ApplySecurityGroupsToClientVpnTargetNetwork"
}
export declare enum GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    securityGroupId: string[];
    version: GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;
    vpcId: string;
}
export declare class GetApplySecurityGroupsToClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams;
    headers: GetApplySecurityGroupsToClientVpnTargetNetworkHeaders;
}
export declare class GetApplySecurityGroupsToClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
