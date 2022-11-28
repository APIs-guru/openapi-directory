import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623DeleteTestGridProject = "DeviceFarm_20150623.DeleteTestGridProject"
}
export declare class DeleteTestGridProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTestGridProjectXAmzTargetEnum;
}
export declare class DeleteTestGridProjectRequest extends SpeakeasyBase {
    headers: DeleteTestGridProjectHeaders;
    request: shared.DeleteTestGridProjectRequest;
}
export declare class DeleteTestGridProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    cannotDeleteException?: any;
    contentType: string;
    deleteTestGridProjectResult?: Map<string, any>;
    internalServiceException?: any;
    notFoundException?: any;
    statusCode: number;
}
