import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProjectXAmzTargetEnum {
    CodeBuild20161006DeleteProject = "CodeBuild_20161006.DeleteProject"
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    headers: DeleteProjectHeaders;
    request: shared.DeleteProjectInput;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectOutput?: Map<string, any>;
    invalidInputException?: any;
    statusCode: number;
}
