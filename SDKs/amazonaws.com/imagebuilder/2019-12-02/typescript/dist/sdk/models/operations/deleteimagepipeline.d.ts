import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImagePipelineQueryParams extends SpeakeasyBase {
    imagePipelineArn: string;
}
export declare class DeleteImagePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteImagePipelineRequest extends SpeakeasyBase {
    queryParams: DeleteImagePipelineQueryParams;
    headers: DeleteImagePipelineHeaders;
}
export declare class DeleteImagePipelineResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteImagePipelineResponse?: shared.DeleteImagePipelineResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
