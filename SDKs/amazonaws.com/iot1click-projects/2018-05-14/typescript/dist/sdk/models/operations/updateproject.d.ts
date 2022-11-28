import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object defining the template for a placement.
**/
export declare class UpdateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Map<string, string>;
    deviceTemplates?: Map<string, shared.DeviceTemplate>;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    description?: string;
    placementTemplate?: UpdateProjectRequestBodyPlacementTemplate;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    headers: UpdateProjectHeaders;
    request: UpdateProjectRequestBody;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateProjectResponse?: Map<string, any>;
}
