import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRuleNamesByTargetXAmzTargetEnum {
    AwsEventsListRuleNamesByTarget = "AWSEvents.ListRuleNamesByTarget"
}
export declare class ListRuleNamesByTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRuleNamesByTargetXAmzTargetEnum;
}
export declare class ListRuleNamesByTargetRequest extends SpeakeasyBase {
    headers: ListRuleNamesByTargetHeaders;
    request: shared.ListRuleNamesByTargetRequest;
}
export declare class ListRuleNamesByTargetResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listRuleNamesByTargetResponse?: shared.ListRuleNamesByTargetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
