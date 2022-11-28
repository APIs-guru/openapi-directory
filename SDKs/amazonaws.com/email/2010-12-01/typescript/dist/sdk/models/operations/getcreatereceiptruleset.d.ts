import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateReceiptRuleSetActionEnum {
    CreateReceiptRuleSet = "CreateReceiptRuleSet"
}
export declare enum GetCreateReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCreateReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetCreateReceiptRuleSetActionEnum;
    ruleSetName: string;
    version: GetCreateReceiptRuleSetVersionEnum;
}
export declare class GetCreateReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetCreateReceiptRuleSetQueryParams;
    headers: GetCreateReceiptRuleSetHeaders;
}
export declare class GetCreateReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
