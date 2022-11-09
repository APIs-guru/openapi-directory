import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeReservedCacheNodesOfferingsActionEnum {
    DescribeReservedCacheNodesOfferings = "DescribeReservedCacheNodesOfferings"
}
export declare enum GetDescribeReservedCacheNodesOfferingsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeReservedCacheNodesOfferingsQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedCacheNodesOfferingsActionEnum;
    cacheNodeType?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    offeringType?: string;
    productDescription?: string;
    reservedCacheNodesOfferingId?: string;
    version: GetDescribeReservedCacheNodesOfferingsVersionEnum;
}
export declare class GetDescribeReservedCacheNodesOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedCacheNodesOfferingsRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedCacheNodesOfferingsQueryParams;
    headers: GetDescribeReservedCacheNodesOfferingsHeaders;
}
export declare class GetDescribeReservedCacheNodesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
