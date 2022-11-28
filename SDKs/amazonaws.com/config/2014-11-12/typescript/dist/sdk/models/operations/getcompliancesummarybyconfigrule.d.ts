import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetComplianceSummaryByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByConfigRule = "StarlingDoveService.GetComplianceSummaryByConfigRule"
}
export declare class GetComplianceSummaryByConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryByConfigRuleXAmzTargetEnum;
}
export declare class GetComplianceSummaryByConfigRuleRequest extends SpeakeasyBase {
    headers: GetComplianceSummaryByConfigRuleHeaders;
}
export declare class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    getComplianceSummaryByConfigRuleResponse?: shared.GetComplianceSummaryByConfigRuleResponse;
    statusCode: number;
}
