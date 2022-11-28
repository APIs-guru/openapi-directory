import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateDeviceWithPlacementPathParams extends SpeakeasyBase {
    deviceTemplateName: string;
    placementName: string;
    projectName: string;
}
export declare class AssociateDeviceWithPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateDeviceWithPlacementRequestBody extends SpeakeasyBase {
    deviceId: string;
}
export declare class AssociateDeviceWithPlacementRequest extends SpeakeasyBase {
    pathParams: AssociateDeviceWithPlacementPathParams;
    headers: AssociateDeviceWithPlacementHeaders;
    request: AssociateDeviceWithPlacementRequestBody;
}
export declare class AssociateDeviceWithPlacementResponse extends SpeakeasyBase {
    associateDeviceWithPlacementResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
