import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReservedCacheNodesOfferingsActionEnum {
    DescribeReservedCacheNodesOfferings = "DescribeReservedCacheNodesOfferings"
}
export declare enum PostDescribeReservedCacheNodesOfferingsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeReservedCacheNodesOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedCacheNodesOfferingsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedCacheNodesOfferingsVersionEnum;
}
export declare class PostDescribeReservedCacheNodesOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedCacheNodesOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedCacheNodesOfferingsQueryParams;
    headers: PostDescribeReservedCacheNodesOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedCacheNodesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
