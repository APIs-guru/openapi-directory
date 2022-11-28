import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDynamicThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class CreateDynamicThingGroupHeaders extends SpeakeasyBase {
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
export declare class CreateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class CreateDynamicThingGroupRequestBody extends SpeakeasyBase {
    indexName?: string;
    queryString: string;
    queryVersion?: string;
    tags?: shared.Tag[];
    thingGroupProperties?: CreateDynamicThingGroupRequestBodyThingGroupProperties;
}
export declare class CreateDynamicThingGroupRequest extends SpeakeasyBase {
    pathParams: CreateDynamicThingGroupPathParams;
    headers: CreateDynamicThingGroupHeaders;
    request: CreateDynamicThingGroupRequestBody;
}
export declare class CreateDynamicThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    createDynamicThingGroupResponse?: shared.CreateDynamicThingGroupResponse;
    internalFailureException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
