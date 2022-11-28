import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProjectXAmzTargetEnum {
    DeviceFarm20150623DeleteProject = "DeviceFarm_20150623.DeleteProject"
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
    request: shared.DeleteProjectRequest;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteProjectResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
