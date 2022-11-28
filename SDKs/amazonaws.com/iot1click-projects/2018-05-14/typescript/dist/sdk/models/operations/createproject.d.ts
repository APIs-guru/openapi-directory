import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectHeaders extends SpeakeasyBase {
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
export declare class CreateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Map<string, string>;
    deviceTemplates?: Map<string, shared.DeviceTemplate>;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    description?: string;
    placementTemplate?: CreateProjectRequestBodyPlacementTemplate;
    projectName: string;
    tags?: Map<string, string>;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    headers: CreateProjectHeaders;
    request: CreateProjectRequestBody;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    createProjectResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceConflictException?: any;
    statusCode: number;
}
