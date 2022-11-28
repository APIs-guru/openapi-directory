import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelineExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPipelineExecutionsXAmzTargetEnum {
    CodePipeline20150709ListPipelineExecutions = "CodePipeline_20150709.ListPipelineExecutions"
}
export declare class ListPipelineExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineExecutionsXAmzTargetEnum;
}
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    queryParams: ListPipelineExecutionsQueryParams;
    headers: ListPipelineExecutionsHeaders;
    request: shared.ListPipelineExecutionsInput;
}
export declare class ListPipelineExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listPipelineExecutionsOutput?: shared.ListPipelineExecutionsOutput;
    pipelineNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
