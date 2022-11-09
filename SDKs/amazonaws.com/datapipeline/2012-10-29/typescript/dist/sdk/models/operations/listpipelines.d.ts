import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPipelinesQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListPipelinesXAmzTargetEnum {
    DataPipelineListPipelines = "DataPipeline.ListPipelines"
}
export declare class ListPipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelinesXAmzTargetEnum;
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    queryParams: ListPipelinesQueryParams;
    headers: ListPipelinesHeaders;
    request: shared.ListPipelinesInput;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    listPipelinesOutput?: shared.ListPipelinesOutput;
    statusCode: number;
}
