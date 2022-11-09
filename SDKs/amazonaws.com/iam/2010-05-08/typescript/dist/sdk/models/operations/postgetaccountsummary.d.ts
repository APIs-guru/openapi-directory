import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetAccountSummaryActionEnum {
    GetAccountSummary = "GetAccountSummary"
}
export declare enum PostGetAccountSummaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetAccountSummaryQueryParams extends SpeakeasyBase {
    action: PostGetAccountSummaryActionEnum;
    version: PostGetAccountSummaryVersionEnum;
}
export declare class PostGetAccountSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccountSummaryRequest extends SpeakeasyBase {
    queryParams: PostGetAccountSummaryQueryParams;
    headers: PostGetAccountSummaryHeaders;
}
export declare class PostGetAccountSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
