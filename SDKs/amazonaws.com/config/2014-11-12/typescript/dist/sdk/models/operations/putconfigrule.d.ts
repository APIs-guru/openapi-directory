import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutConfigRuleXAmzTargetEnum {
    StarlingDoveServicePutConfigRule = "StarlingDoveService.PutConfigRule"
}
export declare class PutConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigRuleXAmzTargetEnum;
}
export declare class PutConfigRuleRequest extends SpeakeasyBase {
    headers: PutConfigRuleHeaders;
    request: shared.PutConfigRuleRequest;
}
export declare class PutConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    maxNumberOfConfigRulesExceededException?: any;
    noAvailableConfigurationRecorderException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
