import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReorderReceiptRuleSetActionEnum {
    ReorderReceiptRuleSet = "ReorderReceiptRuleSet"
}
export declare enum GetReorderReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetReorderReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetReorderReceiptRuleSetActionEnum;
    ruleNames: string[];
    ruleSetName: string;
    version: GetReorderReceiptRuleSetVersionEnum;
}
export declare class GetReorderReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReorderReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetReorderReceiptRuleSetQueryParams;
    headers: GetReorderReceiptRuleSetHeaders;
}
export declare class GetReorderReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
