import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateQuantumTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateQuantumTaskRequestBody extends SpeakeasyBase {
    action: string;
    clientToken: string;
    deviceArn: string;
    deviceParameters?: string;
    outputS3Bucket: string;
    outputS3KeyPrefix: string;
    shots: number;
    tags?: Map<string, string>;
}
export declare class CreateQuantumTaskRequest extends SpeakeasyBase {
    headers: CreateQuantumTaskHeaders;
    request: CreateQuantumTaskRequestBody;
}
export declare class CreateQuantumTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createQuantumTaskResponse?: shared.CreateQuantumTaskResponse;
    deviceOfflineException?: any;
    internalServiceException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
