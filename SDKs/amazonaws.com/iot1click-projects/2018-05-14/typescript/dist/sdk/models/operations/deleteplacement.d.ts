import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeletePlacementPathParams extends SpeakeasyBase {
    placementName: string;
    projectName: string;
}
export declare class DeletePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePlacementRequest extends SpeakeasyBase {
    pathParams: DeletePlacementPathParams;
    headers: DeletePlacementHeaders;
}
export declare class DeletePlacementResponse extends SpeakeasyBase {
    contentType: string;
    deletePlacementResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
