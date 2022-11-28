import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActionExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListActionExecutionsXAmzTargetEnum {
    CodePipeline20150709ListActionExecutions = "CodePipeline_20150709.ListActionExecutions"
}
export declare class ListActionExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActionExecutionsXAmzTargetEnum;
}
export declare class ListActionExecutionsRequest extends SpeakeasyBase {
    queryParams: ListActionExecutionsQueryParams;
    headers: ListActionExecutionsHeaders;
    request: shared.ListActionExecutionsInput;
}
export declare class ListActionExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listActionExecutionsOutput?: shared.ListActionExecutionsOutput;
    pipelineExecutionNotFoundException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
