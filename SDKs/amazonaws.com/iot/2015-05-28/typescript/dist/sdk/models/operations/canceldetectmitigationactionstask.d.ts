import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelDetectMitigationActionsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class CancelDetectMitigationActionsTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelDetectMitigationActionsTaskRequest extends SpeakeasyBase {
    pathParams: CancelDetectMitigationActionsTaskPathParams;
    headers: CancelDetectMitigationActionsTaskHeaders;
}
export declare class CancelDetectMitigationActionsTaskResponse extends SpeakeasyBase {
    cancelDetectMitigationActionsTaskResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
