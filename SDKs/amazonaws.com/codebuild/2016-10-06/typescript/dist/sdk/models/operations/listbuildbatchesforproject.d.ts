import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuildBatchesForProjectQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListBuildBatchesForProjectXAmzTargetEnum {
    CodeBuild20161006ListBuildBatchesForProject = "CodeBuild_20161006.ListBuildBatchesForProject"
}
export declare class ListBuildBatchesForProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildBatchesForProjectXAmzTargetEnum;
}
export declare class ListBuildBatchesForProjectRequest extends SpeakeasyBase {
    queryParams: ListBuildBatchesForProjectQueryParams;
    headers: ListBuildBatchesForProjectHeaders;
    request: shared.ListBuildBatchesForProjectInput;
}
export declare class ListBuildBatchesForProjectResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listBuildBatchesForProjectOutput?: shared.ListBuildBatchesForProjectOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
