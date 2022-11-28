import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProjectXAmzTargetEnum {
    CodeBuild20161006UpdateProject = "CodeBuild_20161006.UpdateProject"
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProjectXAmzTargetEnum;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    headers: UpdateProjectHeaders;
    request: shared.UpdateProjectInput;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProjectOutput?: shared.UpdateProjectOutput;
}
