import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateClientVpnTargetNetworkActionEnum {
    DisassociateClientVpnTargetNetwork = "DisassociateClientVpnTargetNetwork"
}
export declare enum PostDisassociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
    action: PostDisassociateClientVpnTargetNetworkActionEnum;
    version: PostDisassociateClientVpnTargetNetworkVersionEnum;
}
export declare class PostDisassociateClientVpnTargetNetworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    queryParams: PostDisassociateClientVpnTargetNetworkQueryParams;
    headers: PostDisassociateClientVpnTargetNetworkHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
