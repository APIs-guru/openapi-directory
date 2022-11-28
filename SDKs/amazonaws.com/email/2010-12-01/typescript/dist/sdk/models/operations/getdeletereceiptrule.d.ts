import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}
export declare enum GetDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteReceiptRuleQueryParams extends SpeakeasyBase {
    action: GetDeleteReceiptRuleActionEnum;
    ruleName: string;
    ruleSetName: string;
    version: GetDeleteReceiptRuleVersionEnum;
}
export declare class GetDeleteReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteReceiptRuleRequest extends SpeakeasyBase {
    queryParams: GetDeleteReceiptRuleQueryParams;
    headers: GetDeleteReceiptRuleHeaders;
}
export declare class GetDeleteReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
