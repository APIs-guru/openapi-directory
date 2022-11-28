import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuildsForProjectQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListBuildsForProjectXAmzTargetEnum {
    CodeBuild20161006ListBuildsForProject = "CodeBuild_20161006.ListBuildsForProject"
}
export declare class ListBuildsForProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildsForProjectXAmzTargetEnum;
}
export declare class ListBuildsForProjectRequest extends SpeakeasyBase {
    queryParams: ListBuildsForProjectQueryParams;
    headers: ListBuildsForProjectHeaders;
    request: shared.ListBuildsForProjectInput;
}
export declare class ListBuildsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listBuildsForProjectOutput?: shared.ListBuildsForProjectOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
