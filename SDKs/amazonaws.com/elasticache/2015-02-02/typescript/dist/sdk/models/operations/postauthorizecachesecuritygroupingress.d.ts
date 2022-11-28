import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeCacheSecurityGroupIngressActionEnum {
    AuthorizeCacheSecurityGroupIngress = "AuthorizeCacheSecurityGroupIngress"
}
export declare enum PostAuthorizeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostAuthorizeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeCacheSecurityGroupIngressActionEnum;
    version: PostAuthorizeCacheSecurityGroupIngressVersionEnum;
}
export declare class PostAuthorizeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeCacheSecurityGroupIngressQueryParams;
    headers: PostAuthorizeCacheSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
