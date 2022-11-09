import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedInstancesOfferingsActionEnum {
    DescribeReservedInstancesOfferings = "DescribeReservedInstancesOfferings"
}
export declare enum PostDescribeReservedInstancesOfferingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeReservedInstancesOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedInstancesOfferingsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeReservedInstancesOfferingsVersionEnum;
}
export declare class PostDescribeReservedInstancesOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedInstancesOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedInstancesOfferingsQueryParams;
    headers: PostDescribeReservedInstancesOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedInstancesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
