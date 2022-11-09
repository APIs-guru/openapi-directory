import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetActiveReceiptRuleSetActionEnum {
    SetActiveReceiptRuleSet = "SetActiveReceiptRuleSet"
}
export declare enum GetSetActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetActiveReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetSetActiveReceiptRuleSetActionEnum;
    ruleSetName?: string;
    version: GetSetActiveReceiptRuleSetVersionEnum;
}
export declare class GetSetActiveReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetActiveReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetSetActiveReceiptRuleSetQueryParams;
    headers: GetSetActiveReceiptRuleSetHeaders;
}
export declare class GetSetActiveReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
