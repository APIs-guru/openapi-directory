import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicesInPlacementPathParams extends SpeakeasyBase {
    placementName: string;
    projectName: string;
}
export declare class GetDevicesInPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDevicesInPlacementRequest extends SpeakeasyBase {
    pathParams: GetDevicesInPlacementPathParams;
    headers: GetDevicesInPlacementHeaders;
}
export declare class GetDevicesInPlacementResponse extends SpeakeasyBase {
    contentType: string;
    getDevicesInPlacementResponse?: shared.GetDevicesInPlacementResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
