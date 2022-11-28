import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelAuditMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class CancelAuditMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelAuditMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: CancelAuditMitigationActionsTaskPathParams;
    headers: CancelAuditMitigationActionsTaskHeaders;
}
export declare class CancelAuditMitigationActionsTaskResponse extends SpeakeasyBase {
    cancelAuditMitigationActionsTaskResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
