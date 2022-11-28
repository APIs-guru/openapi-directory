import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableRuleXAmzTargetEnum {
    AwsEventsEnableRule = "AWSEvents.EnableRule"
}
export declare class EnableRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableRuleXAmzTargetEnum;
}
export declare class EnableRuleRequest extends SpeakeasyBase {
    headers: EnableRuleHeaders;
    request: shared.EnableRuleRequest;
}
export declare class EnableRuleResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    managedRuleException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
