import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteReceiptRuleSetActionEnum {
    DeleteReceiptRuleSet = "DeleteReceiptRuleSet"
}
export declare enum GetDeleteReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetDeleteReceiptRuleSetActionEnum;
    ruleSetName: string;
    version: GetDeleteReceiptRuleSetVersionEnum;
}
export declare class GetDeleteReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetDeleteReceiptRuleSetQueryParams;
    headers: GetDeleteReceiptRuleSetHeaders;
}
export declare class GetDeleteReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
