import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeClientVpnIngressActionEnum {
    AuthorizeClientVpnIngress = "AuthorizeClientVpnIngress"
}
export declare enum PostAuthorizeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAuthorizeClientVpnIngressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeClientVpnIngressActionEnum;
    version: PostAuthorizeClientVpnIngressVersionEnum;
}
export declare class PostAuthorizeClientVpnIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeClientVpnIngressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeClientVpnIngressQueryParams;
    headers: PostAuthorizeClientVpnIngressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
