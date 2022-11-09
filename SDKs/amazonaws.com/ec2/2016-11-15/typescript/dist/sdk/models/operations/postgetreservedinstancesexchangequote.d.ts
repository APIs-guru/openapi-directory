import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetReservedInstancesExchangeQuoteActionEnum {
    GetReservedInstancesExchangeQuote = "GetReservedInstancesExchangeQuote"
}
export declare enum PostGetReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetReservedInstancesExchangeQuoteQueryParams extends SpeakeasyBase {
    action: PostGetReservedInstancesExchangeQuoteActionEnum;
    version: PostGetReservedInstancesExchangeQuoteVersionEnum;
}
export declare class PostGetReservedInstancesExchangeQuoteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    queryParams: PostGetReservedInstancesExchangeQuoteQueryParams;
    headers: PostGetReservedInstancesExchangeQuoteHeaders;
    request?: Uint8Array;
}
export declare class PostGetReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
