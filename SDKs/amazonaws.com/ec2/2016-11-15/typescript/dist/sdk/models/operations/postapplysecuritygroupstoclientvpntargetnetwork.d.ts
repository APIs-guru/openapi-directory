import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum {
    ApplySecurityGroupsToClientVpnTargetNetwork = "ApplySecurityGroupsToClientVpnTargetNetwork"
}
export declare enum PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum;
    version: PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;
}
export declare class PostApplySecurityGroupsToClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams;
    headers: PostApplySecurityGroupsToClientVpnTargetNetworkHeaders;
    request?: Uint8Array;
}
export declare class PostApplySecurityGroupsToClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
