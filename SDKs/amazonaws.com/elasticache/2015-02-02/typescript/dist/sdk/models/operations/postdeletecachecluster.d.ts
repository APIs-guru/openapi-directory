import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteCacheClusterActionEnum {
    DeleteCacheCluster = "DeleteCacheCluster"
}
export declare enum PostDeleteCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteCacheClusterQueryParams extends SpeakeasyBase {
    action: PostDeleteCacheClusterActionEnum;
    version: PostDeleteCacheClusterVersionEnum;
}
export declare class PostDeleteCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCacheClusterRequest extends SpeakeasyBase {
    queryParams: PostDeleteCacheClusterQueryParams;
    headers: PostDeleteCacheClusterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
