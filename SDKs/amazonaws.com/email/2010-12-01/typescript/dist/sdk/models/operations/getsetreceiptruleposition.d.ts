import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetReceiptRulePositionActionEnum {
    SetReceiptRulePosition = "SetReceiptRulePosition"
}
export declare enum GetSetReceiptRulePositionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetReceiptRulePositionQueryParams extends SpeakeasyBase {
    action: GetSetReceiptRulePositionActionEnum;
    after?: string;
    ruleName: string;
    ruleSetName: string;
    version: GetSetReceiptRulePositionVersionEnum;
}
export declare class GetSetReceiptRulePositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetReceiptRulePositionRequest extends SpeakeasyBase {
    queryParams: GetSetReceiptRulePositionQueryParams;
    headers: GetSetReceiptRulePositionHeaders;
}
export declare class GetSetReceiptRulePositionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
