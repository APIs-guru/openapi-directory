import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListProjectsXAmzTargetEnum {
    CodeBuild20161006ListProjects = "CodeBuild_20161006.ListProjects"
}
export declare class ListProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    queryParams: ListProjectsQueryParams;
    headers: ListProjectsHeaders;
    request: shared.ListProjectsInput;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listProjectsOutput?: shared.ListProjectsOutput;
    statusCode: number;
}
