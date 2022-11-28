import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutOrganizationConfigRuleXAmzTargetEnum {
    StarlingDoveServicePutOrganizationConfigRule = "StarlingDoveService.PutOrganizationConfigRule"
}
export declare class PutOrganizationConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutOrganizationConfigRuleXAmzTargetEnum;
}
export declare class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
    headers: PutOrganizationConfigRuleHeaders;
    request: shared.PutOrganizationConfigRuleRequest;
}
export declare class PutOrganizationConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    maxNumberOfOrganizationConfigRulesExceededException?: any;
    noAvailableOrganizationException?: any;
    organizationAccessDeniedException?: any;
    organizationAllFeaturesNotEnabledException?: any;
    putOrganizationConfigRuleResponse?: shared.PutOrganizationConfigRuleResponse;
    resourceInUseException?: any;
    statusCode: number;
    validationException?: any;
}
