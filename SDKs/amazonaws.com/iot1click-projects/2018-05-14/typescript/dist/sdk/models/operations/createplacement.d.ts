import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePlacementPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class CreatePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePlacementRequestBody extends SpeakeasyBase {
    attributes?: Map<string, string>;
    placementName: string;
}
export declare class CreatePlacementRequest extends SpeakeasyBase {
    pathParams: CreatePlacementPathParams;
    headers: CreatePlacementHeaders;
    request: CreatePlacementRequestBody;
}
export declare class CreatePlacementResponse extends SpeakeasyBase {
    contentType: string;
    createPlacementResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
