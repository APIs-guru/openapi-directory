import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListImagePipelineImagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImagePipelineImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListImagePipelineImagesRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    imagePipelineArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListImagePipelineImagesRequest extends SpeakeasyBase {
    queryParams: ListImagePipelineImagesQueryParams;
    headers: ListImagePipelineImagesHeaders;
    request: ListImagePipelineImagesRequestBody;
}
export declare class ListImagePipelineImagesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImagePipelineImagesResponse?: shared.ListImagePipelineImagesResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
