import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRuleXAmzTargetEnum {
    AwsEventsPutRule = "AWSEvents.PutRule"
}
export declare class PutRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRuleXAmzTargetEnum;
}
export declare class PutRuleRequest extends SpeakeasyBase {
    headers: PutRuleHeaders;
    request: shared.PutRuleRequest;
}
export declare class PutRuleResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    invalidEventPatternException?: any;
    limitExceededException?: any;
    managedRuleException?: any;
    putRuleResponse?: shared.PutRuleResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
