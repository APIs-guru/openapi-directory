import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteRuleActionEnum {
    DeleteRule = "DeleteRule"
}
export declare enum GetDeleteRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDeleteRuleQueryParams extends SpeakeasyBase {
    action: GetDeleteRuleActionEnum;
    ruleArn: string;
    version: GetDeleteRuleVersionEnum;
}
export declare class GetDeleteRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRuleRequest extends SpeakeasyBase {
    queryParams: GetDeleteRuleQueryParams;
    headers: GetDeleteRuleHeaders;
}
export declare class GetDeleteRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
