import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectXAmzTargetEnum {
    CodeBuild20161006CreateProject = "CodeBuild_20161006.CreateProject"
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProjectXAmzTargetEnum;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    headers: CreateProjectHeaders;
    request: shared.CreateProjectInput;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    accountLimitExceededException?: any;
    contentType: string;
    createProjectOutput?: shared.CreateProjectOutput;
    invalidInputException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
