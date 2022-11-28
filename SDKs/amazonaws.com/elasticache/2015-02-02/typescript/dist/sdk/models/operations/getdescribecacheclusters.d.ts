import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeCacheClustersActionEnum {
    DescribeCacheClusters = "DescribeCacheClusters"
}
export declare enum GetDescribeCacheClustersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeCacheClustersQueryParams extends SpeakeasyBase {
    action: GetDescribeCacheClustersActionEnum;
    cacheClusterId?: string;
    marker?: string;
    maxRecords?: number;
    showCacheClustersNotInReplicationGroups?: boolean;
    showCacheNodeInfo?: boolean;
    version: GetDescribeCacheClustersVersionEnum;
}
export declare class GetDescribeCacheClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeCacheClustersRequest extends SpeakeasyBase {
    queryParams: GetDescribeCacheClustersQueryParams;
    headers: GetDescribeCacheClustersHeaders;
}
export declare class GetDescribeCacheClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
