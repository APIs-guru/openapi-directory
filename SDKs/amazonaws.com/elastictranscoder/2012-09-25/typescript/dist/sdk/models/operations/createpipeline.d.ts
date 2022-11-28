import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
export declare class CreatePipelineRequestBodyContentConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export declare class CreatePipelineRequestBodyNotifications extends SpeakeasyBase {
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
}
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
export declare class CreatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
export declare class CreatePipelineRequestBody extends SpeakeasyBase {
    awsKmsKeyArn?: string;
    contentConfig?: CreatePipelineRequestBodyContentConfig;
    inputBucket: string;
    name: string;
    notifications?: CreatePipelineRequestBodyNotifications;
    outputBucket?: string;
    role: string;
    thumbnailConfig?: CreatePipelineRequestBodyThumbnailConfig;
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    headers: CreatePipelineHeaders;
    request: CreatePipelineRequestBody;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createPipelineResponse?: shared.CreatePipelineResponse;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
