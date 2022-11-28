import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePipelinePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePipelineHeaders extends SpeakeasyBase {
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
export declare class UpdatePipelineRequestBodyContentConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export declare class UpdatePipelineRequestBodyNotifications extends SpeakeasyBase {
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
}
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
export declare class UpdatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
export declare class UpdatePipelineRequestBody extends SpeakeasyBase {
    awsKmsKeyArn?: string;
    contentConfig?: UpdatePipelineRequestBodyContentConfig;
    inputBucket?: string;
    name?: string;
    notifications?: UpdatePipelineRequestBodyNotifications;
    role?: string;
    thumbnailConfig?: UpdatePipelineRequestBodyThumbnailConfig;
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    pathParams: UpdatePipelinePathParams;
    headers: UpdatePipelineHeaders;
    request: UpdatePipelineRequestBody;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updatePipelineResponse?: shared.UpdatePipelineResponse;
    validationException?: any;
}
