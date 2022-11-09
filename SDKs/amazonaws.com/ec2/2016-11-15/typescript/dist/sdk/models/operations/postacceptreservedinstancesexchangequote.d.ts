import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAcceptReservedInstancesExchangeQuoteActionEnum {
    AcceptReservedInstancesExchangeQuote = "AcceptReservedInstancesExchangeQuote"
}
export declare enum PostAcceptReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptReservedInstancesExchangeQuoteQueryParams extends SpeakeasyBase {
    action: PostAcceptReservedInstancesExchangeQuoteActionEnum;
    version: PostAcceptReservedInstancesExchangeQuoteVersionEnum;
}
export declare class PostAcceptReservedInstancesExchangeQuoteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    queryParams: PostAcceptReservedInstancesExchangeQuoteQueryParams;
    headers: PostAcceptReservedInstancesExchangeQuoteHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
