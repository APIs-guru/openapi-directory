import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetProjectsXAmzTargetEnum {
    CodeBuild20161006BatchGetProjects = "CodeBuild_20161006.BatchGetProjects"
}
export declare class BatchGetProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetProjectsXAmzTargetEnum;
}
export declare class BatchGetProjectsRequest extends SpeakeasyBase {
    headers: BatchGetProjectsHeaders;
    request: shared.BatchGetProjectsInput;
}
export declare class BatchGetProjectsResponse extends SpeakeasyBase {
    batchGetProjectsOutput?: shared.BatchGetProjectsOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
