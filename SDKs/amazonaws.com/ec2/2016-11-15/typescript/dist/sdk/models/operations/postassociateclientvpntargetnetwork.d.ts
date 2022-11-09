import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateClientVpnTargetNetworkActionEnum {
    AssociateClientVpnTargetNetwork = "AssociateClientVpnTargetNetwork"
}
export declare enum PostAssociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: PostAssociateClientVpnTargetNetworkActionEnum;
    version: PostAssociateClientVpnTargetNetworkVersionEnum;
}
export declare class PostAssociateClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: PostAssociateClientVpnTargetNetworkQueryParams;
    headers: PostAssociateClientVpnTargetNetworkHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
