import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsByPipelinePathParams extends SpeakeasyBase {
    pipelineId: string;
}
export declare class ListJobsByPipelineQueryParams extends SpeakeasyBase {
    ascending?: string;
    pageToken?: string;
}
export declare class ListJobsByPipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobsByPipelineRequest extends SpeakeasyBase {
    pathParams: ListJobsByPipelinePathParams;
    queryParams: ListJobsByPipelineQueryParams;
    headers: ListJobsByPipelineHeaders;
}
export declare class ListJobsByPipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    listJobsByPipelineResponse?: shared.ListJobsByPipelineResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
