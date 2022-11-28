import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProjectXAmzTargetEnum {
    DeviceFarm20150623GetProject = "DeviceFarm_20150623.GetProject"
}
export declare class GetProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProjectXAmzTargetEnum;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    headers: GetProjectHeaders;
    request: shared.GetProjectRequest;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getProjectResult?: shared.GetProjectResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
