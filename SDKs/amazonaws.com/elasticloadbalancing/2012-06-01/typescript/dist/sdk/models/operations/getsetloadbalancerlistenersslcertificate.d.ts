import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetLoadBalancerListenerSslCertificateActionEnum {
    SetLoadBalancerListenerSslCertificate = "SetLoadBalancerListenerSSLCertificate"
}
export declare enum GetSetLoadBalancerListenerSslCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetSetLoadBalancerListenerSslCertificateQueryParams extends SpeakeasyBase {
    action: GetSetLoadBalancerListenerSslCertificateActionEnum;
    loadBalancerName: string;
    loadBalancerPort: number;
    sslCertificateId: string;
    version: GetSetLoadBalancerListenerSslCertificateVersionEnum;
}
export declare class GetSetLoadBalancerListenerSslCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetLoadBalancerListenerSslCertificateRequest extends SpeakeasyBase {
    queryParams: GetSetLoadBalancerListenerSslCertificateQueryParams;
    headers: GetSetLoadBalancerListenerSslCertificateHeaders;
}
export declare class GetSetLoadBalancerListenerSslCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
