import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateThingTypePathParams extends SpeakeasyBase {
    thingTypeName: string;
}
export declare class CreateThingTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
export declare class CreateThingTypeRequestBodyThingTypeProperties extends SpeakeasyBase {
    searchableAttributes?: string[];
    thingTypeDescription?: string;
}
export declare class CreateThingTypeRequestBody extends SpeakeasyBase {
    tags?: shared.Tag[];
    thingTypeProperties?: CreateThingTypeRequestBodyThingTypeProperties;
}
export declare class CreateThingTypeRequest extends SpeakeasyBase {
    pathParams: CreateThingTypePathParams;
    headers: CreateThingTypeHeaders;
    request: CreateThingTypeRequestBody;
}
export declare class CreateThingTypeResponse extends SpeakeasyBase {
    contentType: string;
    createThingTypeResponse?: shared.CreateThingTypeResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
