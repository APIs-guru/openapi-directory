import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSharedProjectsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSharedProjectsXAmzTargetEnum {
    CodeBuild20161006ListSharedProjects = "CodeBuild_20161006.ListSharedProjects"
}
export declare class ListSharedProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSharedProjectsXAmzTargetEnum;
}
export declare class ListSharedProjectsRequest extends SpeakeasyBase {
    queryParams: ListSharedProjectsQueryParams;
    headers: ListSharedProjectsHeaders;
    request: shared.ListSharedProjectsInput;
}
export declare class ListSharedProjectsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listSharedProjectsOutput?: shared.ListSharedProjectsOutput;
    statusCode: number;
}
