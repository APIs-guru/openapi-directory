import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class CreateThingHeaders extends SpeakeasyBase {
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
export declare class CreateThingRequestBodyAttributePayload extends SpeakeasyBase {
    attributes?: Map<string, string>;
    merge?: boolean;
}
export declare class CreateThingRequestBody extends SpeakeasyBase {
    attributePayload?: CreateThingRequestBodyAttributePayload;
    billingGroupName?: string;
    thingTypeName?: string;
}
export declare class CreateThingRequest extends SpeakeasyBase {
    pathParams: CreateThingPathParams;
    headers: CreateThingHeaders;
    request: CreateThingRequestBody;
}
export declare class CreateThingResponse extends SpeakeasyBase {
    contentType: string;
    createThingResponse?: shared.CreateThingResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
