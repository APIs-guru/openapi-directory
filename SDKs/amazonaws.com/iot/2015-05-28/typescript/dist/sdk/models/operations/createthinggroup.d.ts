import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class CreateThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Thing group properties.
**/
export declare class CreateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class CreateThingGroupRequestBody extends SpeakeasyBase {
    parentGroupName?: string;
    tags?: shared.Tag[];
    thingGroupProperties?: CreateThingGroupRequestBodyThingGroupProperties;
}
export declare class CreateThingGroupRequest extends SpeakeasyBase {
    pathParams: CreateThingGroupPathParams;
    headers: CreateThingGroupHeaders;
    request: CreateThingGroupRequestBody;
}
export declare class CreateThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    createThingGroupResponse?: shared.CreateThingGroupResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
