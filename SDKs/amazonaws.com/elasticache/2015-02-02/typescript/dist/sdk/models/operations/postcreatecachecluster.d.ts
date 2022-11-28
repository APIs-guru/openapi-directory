import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCacheClusterActionEnum {
    CreateCacheCluster = "CreateCacheCluster"
}
export declare enum PostCreateCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateCacheClusterQueryParams extends SpeakeasyBase {
    action: PostCreateCacheClusterActionEnum;
    version: PostCreateCacheClusterVersionEnum;
}
export declare class PostCreateCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCacheClusterRequest extends SpeakeasyBase {
    queryParams: PostCreateCacheClusterQueryParams;
    headers: PostCreateCacheClusterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
