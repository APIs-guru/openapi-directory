import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartAuditMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StartAuditMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
export declare class StartAuditMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
    auditCheckToReasonCodeFilter?: Map<string, string[]>;
    auditTaskId?: string;
    findingIds?: string[];
}
export declare class StartAuditMitigationActionsTaskRequestBody extends SpeakeasyBase {
    auditCheckToActionsMapping: Map<string, string[]>;
    clientRequestToken: string;
    target: StartAuditMitigationActionsTaskRequestBodyTarget;
}
export declare class StartAuditMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: StartAuditMitigationActionsTaskPathParams;
    headers: StartAuditMitigationActionsTaskHeaders;
    request: StartAuditMitigationActionsTaskRequestBody;
}
export declare class StartAuditMitigationActionsTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    startAuditMitigationActionsTaskResponse?: shared.StartAuditMitigationActionsTaskResponse;
    statusCode: number;
    taskAlreadyExistsException?: any;
    throttlingException?: any;
}
