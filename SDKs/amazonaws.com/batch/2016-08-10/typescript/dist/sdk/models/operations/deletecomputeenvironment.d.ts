import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteComputeEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteComputeEnvironmentRequestBody extends SpeakeasyBase {
    computeEnvironment: string;
}
export declare class DeleteComputeEnvironmentRequest extends SpeakeasyBase {
    headers: DeleteComputeEnvironmentHeaders;
    request: DeleteComputeEnvironmentRequestBody;
}
export declare class DeleteComputeEnvironmentResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteComputeEnvironmentResponse?: Map<string, any>;
    serverException?: any;
    statusCode: number;
}
