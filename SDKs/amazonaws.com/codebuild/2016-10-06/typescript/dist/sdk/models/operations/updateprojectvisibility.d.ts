import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProjectVisibilityXAmzTargetEnum {
    CodeBuild20161006UpdateProjectVisibility = "CodeBuild_20161006.UpdateProjectVisibility"
}
export declare class UpdateProjectVisibilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProjectVisibilityXAmzTargetEnum;
}
export declare class UpdateProjectVisibilityRequest extends SpeakeasyBase {
    headers: UpdateProjectVisibilityHeaders;
    request: shared.UpdateProjectVisibilityInput;
}
export declare class UpdateProjectVisibilityResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProjectVisibilityOutput?: shared.UpdateProjectVisibilityOutput;
}
