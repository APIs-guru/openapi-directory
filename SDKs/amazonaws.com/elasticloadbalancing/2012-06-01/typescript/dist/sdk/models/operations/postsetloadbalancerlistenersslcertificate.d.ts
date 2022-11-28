import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetLoadBalancerListenerSslCertificateActionEnum {
    SetLoadBalancerListenerSslCertificate = "SetLoadBalancerListenerSSLCertificate"
}
export declare enum PostSetLoadBalancerListenerSslCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostSetLoadBalancerListenerSslCertificateQueryParams extends SpeakeasyBase {
    action: PostSetLoadBalancerListenerSslCertificateActionEnum;
    version: PostSetLoadBalancerListenerSslCertificateVersionEnum;
}
export declare class PostSetLoadBalancerListenerSslCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetLoadBalancerListenerSslCertificateRequest extends SpeakeasyBase {
    queryParams: PostSetLoadBalancerListenerSslCertificateQueryParams;
    headers: PostSetLoadBalancerListenerSslCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostSetLoadBalancerListenerSslCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
