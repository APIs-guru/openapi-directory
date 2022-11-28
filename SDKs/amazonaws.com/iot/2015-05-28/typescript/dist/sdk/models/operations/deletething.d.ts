import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class DeleteThingQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteThingRequest extends SpeakeasyBase {
    pathParams: DeleteThingPathParams;
    queryParams: DeleteThingQueryParams;
    headers: DeleteThingHeaders;
}
export declare class DeleteThingResponse extends SpeakeasyBase {
    contentType: string;
    deleteThingResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionConflictException?: any;
}
