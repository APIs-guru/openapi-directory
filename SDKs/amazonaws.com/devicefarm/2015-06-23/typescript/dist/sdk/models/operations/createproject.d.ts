import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectXAmzTargetEnum {
    DeviceFarm20150623CreateProject = "DeviceFarm_20150623.CreateProject"
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
    argumentException?: any;
    contentType: string;
    createProjectResult?: shared.CreateProjectResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    tagOperationException?: any;
}
