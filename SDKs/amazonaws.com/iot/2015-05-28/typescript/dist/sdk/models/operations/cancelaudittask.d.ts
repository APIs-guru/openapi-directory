import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelAuditTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class CancelAuditTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelAuditTaskRequest extends SpeakeasyBase {
    pathParams: CancelAuditTaskPathParams;
    headers: CancelAuditTaskHeaders;
}
export declare class CancelAuditTaskResponse extends SpeakeasyBase {
    cancelAuditTaskResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
