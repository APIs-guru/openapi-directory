import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListTargetsByRuleXAmzTargetEnum {
    AwsEventsListTargetsByRule = "AWSEvents.ListTargetsByRule"
}
export declare class ListTargetsByRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTargetsByRuleXAmzTargetEnum;
}
export declare class ListTargetsByRuleRequest extends SpeakeasyBase {
    headers: ListTargetsByRuleHeaders;
    request: shared.ListTargetsByRuleRequest;
}
export declare class ListTargetsByRuleResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listTargetsByRuleResponse?: shared.ListTargetsByRuleResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
