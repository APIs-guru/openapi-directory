import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRevokeClientVpnIngressActionEnum {
    RevokeClientVpnIngress = "RevokeClientVpnIngress"
}
export declare enum PostRevokeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRevokeClientVpnIngressQueryParams extends SpeakeasyBase {
    action: PostRevokeClientVpnIngressActionEnum;
    version: PostRevokeClientVpnIngressVersionEnum;
}
export declare class PostRevokeClientVpnIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeClientVpnIngressRequest extends SpeakeasyBase {
    queryParams: PostRevokeClientVpnIngressQueryParams;
    headers: PostRevokeClientVpnIngressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
