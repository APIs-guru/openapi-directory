import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetQuantumTaskPathParams extends SpeakeasyBase {
    quantumTaskArn: string;
}
export declare class GetQuantumTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetQuantumTaskRequest extends SpeakeasyBase {
    pathParams: GetQuantumTaskPathParams;
    headers: GetQuantumTaskHeaders;
}
export declare class GetQuantumTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getQuantumTaskResponse?: shared.GetQuantumTaskResponse;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
