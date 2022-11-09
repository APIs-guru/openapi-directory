import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCloneReceiptRuleSetActionEnum {
    CloneReceiptRuleSet = "CloneReceiptRuleSet"
}
export declare enum GetCloneReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCloneReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetCloneReceiptRuleSetActionEnum;
    originalRuleSetName: string;
    ruleSetName: string;
    version: GetCloneReceiptRuleSetVersionEnum;
}
export declare class GetCloneReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCloneReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetCloneReceiptRuleSetQueryParams;
    headers: GetCloneReceiptRuleSetHeaders;
}
export declare class GetCloneReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
