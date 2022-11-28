import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}
export declare enum GetRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetRebootCacheClusterQueryParams extends SpeakeasyBase {
    action: GetRebootCacheClusterActionEnum;
    cacheClusterId: string;
    cacheNodeIdsToReboot: string[];
    version: GetRebootCacheClusterVersionEnum;
}
export declare class GetRebootCacheClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebootCacheClusterRequest extends SpeakeasyBase {
    queryParams: GetRebootCacheClusterQueryParams;
    headers: GetRebootCacheClusterHeaders;
}
export declare class GetRebootCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
