import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNotebookExecutionsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListNotebookExecutionsXAmzTargetEnum {
    ElasticMapReduceListNotebookExecutions = "ElasticMapReduce.ListNotebookExecutions"
}
export declare class ListNotebookExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookExecutionsXAmzTargetEnum;
}
export declare class ListNotebookExecutionsRequest extends SpeakeasyBase {
    queryParams: ListNotebookExecutionsQueryParams;
    headers: ListNotebookExecutionsHeaders;
    request: shared.ListNotebookExecutionsInput;
}
export declare class ListNotebookExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    listNotebookExecutionsOutput?: shared.ListNotebookExecutionsOutput;
    statusCode: number;
}
