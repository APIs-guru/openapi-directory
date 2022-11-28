import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigRule = "StarlingDoveService.DeleteConfigRule"
}
export declare class DeleteConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigRuleXAmzTargetEnum;
}
export declare class DeleteConfigRuleRequest extends SpeakeasyBase {
    headers: DeleteConfigRuleHeaders;
    request: shared.DeleteConfigRuleRequest;
}
export declare class DeleteConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    noSuchConfigRuleException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
