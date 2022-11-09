import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateProjectXAmzTargetEnum {
    CodeStar20170419CreateProject = "CodeStar_20170419.CreateProject"
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
    request: shared.CreateProjectRequest;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createProjectResult?: shared.CreateProjectResult;
    invalidServiceRoleException?: any;
    limitExceededException?: any;
    projectAlreadyExistsException?: any;
    projectConfigurationException?: any;
    projectCreationFailedException?: any;
    statusCode: number;
    validationException?: any;
}
