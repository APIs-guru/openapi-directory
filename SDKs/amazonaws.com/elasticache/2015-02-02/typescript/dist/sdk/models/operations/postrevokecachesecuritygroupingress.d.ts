import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRevokeCacheSecurityGroupIngressActionEnum {
    RevokeCacheSecurityGroupIngress = "RevokeCacheSecurityGroupIngress"
}
export declare enum PostRevokeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostRevokeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostRevokeCacheSecurityGroupIngressActionEnum;
    version: PostRevokeCacheSecurityGroupIngressVersionEnum;
}
export declare class PostRevokeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostRevokeCacheSecurityGroupIngressQueryParams;
    headers: PostRevokeCacheSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
