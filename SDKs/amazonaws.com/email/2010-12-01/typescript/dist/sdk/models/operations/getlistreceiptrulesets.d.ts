import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListReceiptRuleSetsActionEnum {
    ListReceiptRuleSets = "ListReceiptRuleSets"
}
export declare enum GetListReceiptRuleSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListReceiptRuleSetsQueryParams extends SpeakeasyBase {
    action: GetListReceiptRuleSetsActionEnum;
    nextToken?: string;
    version: GetListReceiptRuleSetsVersionEnum;
}
export declare class GetListReceiptRuleSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListReceiptRuleSetsRequest extends SpeakeasyBase {
    queryParams: GetListReceiptRuleSetsQueryParams;
    headers: GetListReceiptRuleSetsHeaders;
}
export declare class GetListReceiptRuleSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
