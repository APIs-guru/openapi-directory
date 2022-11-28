import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class UpdateThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The attribute payload.
**/
export declare class UpdateThingRequestBodyAttributePayload extends SpeakeasyBase {
    attributes?: Map<string, string>;
    merge?: boolean;
}
export declare class UpdateThingRequestBody extends SpeakeasyBase {
    attributePayload?: UpdateThingRequestBodyAttributePayload;
    expectedVersion?: number;
    removeThingType?: boolean;
    thingTypeName?: string;
}
export declare class UpdateThingRequest extends SpeakeasyBase {
    pathParams: UpdateThingPathParams;
    headers: UpdateThingHeaders;
    request: UpdateThingRequestBody;
}
export declare class UpdateThingResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateThingResponse?: Map<string, any>;
    versionConflictException?: any;
}
