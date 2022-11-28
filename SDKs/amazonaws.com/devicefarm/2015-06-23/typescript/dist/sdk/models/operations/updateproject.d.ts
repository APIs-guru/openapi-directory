import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProjectXAmzTargetEnum {
    DeviceFarm20150623UpdateProject = "DeviceFarm_20150623.UpdateProject"
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
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateProjectResult?: shared.UpdateProjectResult;
}
