import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetImagePipelineQueryParams extends SpeakeasyBase {
    imagePipelineArn: string;
}
export declare class GetImagePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImagePipelineRequest extends SpeakeasyBase {
    queryParams: GetImagePipelineQueryParams;
    headers: GetImagePipelineHeaders;
}
export declare class GetImagePipelineResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getImagePipelineResponse?: shared.GetImagePipelineResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
