import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutTargetsXAmzTargetEnum {
    AwsEventsPutTargets = "AWSEvents.PutTargets"
}
export declare class PutTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutTargetsXAmzTargetEnum;
}
export declare class PutTargetsRequest extends SpeakeasyBase {
    headers: PutTargetsHeaders;
    request: shared.PutTargetsRequest;
}
export declare class PutTargetsResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    limitExceededException?: any;
    managedRuleException?: any;
    putTargetsResponse?: shared.PutTargetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
