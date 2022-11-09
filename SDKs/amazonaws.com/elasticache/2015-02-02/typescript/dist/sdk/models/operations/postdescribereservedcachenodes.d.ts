import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedCacheNodesActionEnum {
    DescribeReservedCacheNodes = "DescribeReservedCacheNodes"
}
export declare enum PostDescribeReservedCacheNodesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeReservedCacheNodesQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedCacheNodesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedCacheNodesVersionEnum;
}
export declare class PostDescribeReservedCacheNodesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedCacheNodesRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedCacheNodesQueryParams;
    headers: PostDescribeReservedCacheNodesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedCacheNodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
