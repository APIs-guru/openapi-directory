import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeReservedCacheNodesActionEnum {
    DescribeReservedCacheNodes = "DescribeReservedCacheNodes"
}
export declare enum GetDescribeReservedCacheNodesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeReservedCacheNodesQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedCacheNodesActionEnum;
    cacheNodeType?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    offeringType?: string;
    productDescription?: string;
    reservedCacheNodeId?: string;
    reservedCacheNodesOfferingId?: string;
    version: GetDescribeReservedCacheNodesVersionEnum;
}
export declare class GetDescribeReservedCacheNodesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedCacheNodesRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedCacheNodesQueryParams;
    headers: GetDescribeReservedCacheNodesHeaders;
}
export declare class GetDescribeReservedCacheNodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
