import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QueryObjectsQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare enum QueryObjectsXAmzTargetEnum {
    DataPipelineQueryObjects = "DataPipeline.QueryObjects"
}
export declare class QueryObjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryObjectsXAmzTargetEnum;
}
export declare class QueryObjectsRequest extends SpeakeasyBase {
    queryParams: QueryObjectsQueryParams;
    headers: QueryObjectsHeaders;
    request: shared.QueryObjectsInput;
}
export declare class QueryObjectsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    queryObjectsOutput?: shared.QueryObjectsOutput;
    statusCode: number;
}
