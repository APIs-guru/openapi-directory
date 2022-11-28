import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623GetTestGridProject = "DeviceFarm_20150623.GetTestGridProject"
}
export declare class GetTestGridProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTestGridProjectXAmzTargetEnum;
}
export declare class GetTestGridProjectRequest extends SpeakeasyBase {
    headers: GetTestGridProjectHeaders;
    request: shared.GetTestGridProjectRequest;
}
export declare class GetTestGridProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getTestGridProjectResult?: shared.GetTestGridProjectResult;
    internalServiceException?: any;
    notFoundException?: any;
    statusCode: number;
}
