import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623UpdateTestGridProject = "DeviceFarm_20150623.UpdateTestGridProject"
}
export declare class UpdateTestGridProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTestGridProjectXAmzTargetEnum;
}
export declare class UpdateTestGridProjectRequest extends SpeakeasyBase {
    headers: UpdateTestGridProjectHeaders;
    request: shared.UpdateTestGridProjectRequest;
}
export declare class UpdateTestGridProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    internalServiceException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    updateTestGridProjectResult?: shared.UpdateTestGridProjectResult;
}
