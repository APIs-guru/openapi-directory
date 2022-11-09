import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdatePlacementPathParams extends SpeakeasyBase {
    placementName: string;
    projectName: string;
}
export declare class UpdatePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePlacementRequestBody extends SpeakeasyBase {
    attributes?: Map<string, string>;
}
export declare class UpdatePlacementRequest extends SpeakeasyBase {
    pathParams: UpdatePlacementPathParams;
    headers: UpdatePlacementHeaders;
    request: UpdatePlacementRequestBody;
}
export declare class UpdatePlacementResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updatePlacementResponse?: Map<string, any>;
}
