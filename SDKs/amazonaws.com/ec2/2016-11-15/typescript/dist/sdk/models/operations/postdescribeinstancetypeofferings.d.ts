import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceTypeOfferingsActionEnum {
    DescribeInstanceTypeOfferings = "DescribeInstanceTypeOfferings"
}
export declare enum PostDescribeInstanceTypeOfferingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceTypeOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceTypeOfferingsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstanceTypeOfferingsVersionEnum;
}
export declare class PostDescribeInstanceTypeOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceTypeOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceTypeOfferingsQueryParams;
    headers: PostDescribeInstanceTypeOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceTypeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
