import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelQuantumTaskPathParams extends SpeakeasyBase {
    quantumTaskArn: string;
}
export declare class CancelQuantumTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelQuantumTaskRequestBody extends SpeakeasyBase {
    clientToken: string;
}
export declare class CancelQuantumTaskRequest extends SpeakeasyBase {
    pathParams: CancelQuantumTaskPathParams;
    headers: CancelQuantumTaskHeaders;
    request: CancelQuantumTaskRequestBody;
}
export declare class CancelQuantumTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelQuantumTaskResponse?: shared.CancelQuantumTaskResponse;
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
