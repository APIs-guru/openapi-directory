import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteThingTypePathParams extends SpeakeasyBase {
    thingTypeName: string;
}
export declare class DeleteThingTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteThingTypeRequest extends SpeakeasyBase {
    pathParams: DeleteThingTypePathParams;
    headers: DeleteThingTypeHeaders;
}
export declare class DeleteThingTypeResponse extends SpeakeasyBase {
    contentType: string;
    deleteThingTypeResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
