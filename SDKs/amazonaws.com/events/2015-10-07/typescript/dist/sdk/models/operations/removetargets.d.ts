import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveTargetsXAmzTargetEnum {
    AwsEventsRemoveTargets = "AWSEvents.RemoveTargets"
}
export declare class RemoveTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTargetsXAmzTargetEnum;
}
export declare class RemoveTargetsRequest extends SpeakeasyBase {
    headers: RemoveTargetsHeaders;
    request: shared.RemoveTargetsRequest;
}
export declare class RemoveTargetsResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    managedRuleException?: any;
    removeTargetsResponse?: shared.RemoveTargetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
