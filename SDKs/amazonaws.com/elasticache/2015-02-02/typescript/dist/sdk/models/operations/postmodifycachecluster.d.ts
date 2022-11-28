import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyCacheClusterActionEnum {
    ModifyCacheCluster = "ModifyCacheCluster"
}
export declare enum PostModifyCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyCacheClusterQueryParams extends SpeakeasyBase {
    action: PostModifyCacheClusterActionEnum;
    version: PostModifyCacheClusterVersionEnum;
}
export declare class PostModifyCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCacheClusterRequest extends SpeakeasyBase {
    queryParams: PostModifyCacheClusterQueryParams;
    headers: PostModifyCacheClusterHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
