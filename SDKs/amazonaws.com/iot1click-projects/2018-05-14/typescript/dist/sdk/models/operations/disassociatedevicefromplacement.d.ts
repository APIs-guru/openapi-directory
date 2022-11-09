import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateDeviceFromPlacementPathParams extends SpeakeasyBase {
    deviceTemplateName: string;
    placementName: string;
    projectName: string;
}
export declare class DisassociateDeviceFromPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateDeviceFromPlacementRequest extends SpeakeasyBase {
    pathParams: DisassociateDeviceFromPlacementPathParams;
    headers: DisassociateDeviceFromPlacementHeaders;
}
export declare class DisassociateDeviceFromPlacementResponse extends SpeakeasyBase {
    contentType: string;
    disassociateDeviceFromPlacementResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
