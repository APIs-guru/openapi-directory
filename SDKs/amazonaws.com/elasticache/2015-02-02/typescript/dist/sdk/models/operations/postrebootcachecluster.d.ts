import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}
export declare enum PostRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostRebootCacheClusterQueryParams extends SpeakeasyBase {
    action: PostRebootCacheClusterActionEnum;
    version: PostRebootCacheClusterVersionEnum;
}
export declare class PostRebootCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebootCacheClusterRequest extends SpeakeasyBase {
    queryParams: PostRebootCacheClusterQueryParams;
    headers: PostRebootCacheClusterHeaders;
    request?: Uint8Array;
}
export declare class PostRebootCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
