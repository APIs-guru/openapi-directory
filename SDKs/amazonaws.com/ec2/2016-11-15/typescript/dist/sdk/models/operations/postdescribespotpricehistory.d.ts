import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSpotPriceHistoryActionEnum {
    DescribeSpotPriceHistory = "DescribeSpotPriceHistory"
}
export declare enum PostDescribeSpotPriceHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotPriceHistoryQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotPriceHistoryActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSpotPriceHistoryVersionEnum;
}
export declare class PostDescribeSpotPriceHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotPriceHistoryRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotPriceHistoryQueryParams;
    headers: PostDescribeSpotPriceHistoryHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotPriceHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
