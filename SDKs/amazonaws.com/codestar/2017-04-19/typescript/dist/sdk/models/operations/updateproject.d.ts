import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateProjectXAmzTargetEnum {
    CodeStar20170419UpdateProject = "CodeStar_20170419.UpdateProject"
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
    request: shared.UpdateProjectRequest;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    projectNotFoundException?: any;
    statusCode: number;
    updateProjectResult?: Map<string, any>;
    validationException?: any;
}
