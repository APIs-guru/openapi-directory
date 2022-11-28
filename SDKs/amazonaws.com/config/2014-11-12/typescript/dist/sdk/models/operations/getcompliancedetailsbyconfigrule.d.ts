import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetComplianceDetailsByConfigRuleQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByConfigRule = "StarlingDoveService.GetComplianceDetailsByConfigRule"
}
export declare class GetComplianceDetailsByConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceDetailsByConfigRuleXAmzTargetEnum;
}
export declare class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    queryParams: GetComplianceDetailsByConfigRuleQueryParams;
    headers: GetComplianceDetailsByConfigRuleHeaders;
    request: shared.GetComplianceDetailsByConfigRuleRequest;
}
export declare class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    getComplianceDetailsByConfigRuleResponse?: shared.GetComplianceDetailsByConfigRuleResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigRuleException?: any;
    statusCode: number;
}
