import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableRuleXAmzTargetEnum {
    AwsEventsDisableRule = "AWSEvents.DisableRule"
}
export declare class DisableRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableRuleXAmzTargetEnum;
}
export declare class DisableRuleRequest extends SpeakeasyBase {
    headers: DisableRuleHeaders;
    request: shared.DisableRuleRequest;
}
export declare class DisableRuleResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    managedRuleException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
