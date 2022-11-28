import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartDetectMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StartDetectMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  The target of a mitigation action task.
**/
export declare class StartDetectMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
    behaviorName?: string;
    securityProfileName?: string;
    violationIds?: string[];
}
/**
 *  Specifies the time period of which violation events occurred between.
**/
export declare class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
}
export declare class StartDetectMitigationActionsTaskRequestBody extends SpeakeasyBase {
    actions: string[];
    clientRequestToken: string;
    includeOnlyActiveViolations?: boolean;
    includeSuppressedAlerts?: boolean;
    target: StartDetectMitigationActionsTaskRequestBodyTarget;
    violationEventOccurrenceRange?: StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;
}
export declare class StartDetectMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: StartDetectMitigationActionsTaskPathParams;
    headers: StartDetectMitigationActionsTaskHeaders;
    request: StartDetectMitigationActionsTaskRequestBody;
}
export declare class StartDetectMitigationActionsTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    startDetectMitigationActionsTaskResponse?: shared.StartDetectMitigationActionsTaskResponse;
    statusCode: number;
    taskAlreadyExistsException?: any;
    throttlingException?: any;
}
