import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteCacheClusterActionEnum {
    DeleteCacheCluster = "DeleteCacheCluster"
}
export declare enum GetDeleteCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteCacheClusterQueryParams extends SpeakeasyBase {
    action: GetDeleteCacheClusterActionEnum;
    cacheClusterId: string;
    finalSnapshotIdentifier?: string;
    version: GetDeleteCacheClusterVersionEnum;
}
export declare class GetDeleteCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCacheClusterRequest extends SpeakeasyBase {
    queryParams: GetDeleteCacheClusterQueryParams;
    headers: GetDeleteCacheClusterHeaders;
}
export declare class GetDeleteCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
