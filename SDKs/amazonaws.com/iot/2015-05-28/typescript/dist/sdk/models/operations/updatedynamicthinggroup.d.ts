import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDynamicThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class UpdateDynamicThingGroupHeaders extends SpeakeasyBase {
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
export declare class UpdateDynamicThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class UpdateDynamicThingGroupRequestBody extends SpeakeasyBase {
    expectedVersion?: number;
    indexName?: string;
    queryString?: string;
    queryVersion?: string;
    thingGroupProperties: UpdateDynamicThingGroupRequestBodyThingGroupProperties;
}
export declare class UpdateDynamicThingGroupRequest extends SpeakeasyBase {
    pathParams: UpdateDynamicThingGroupPathParams;
    headers: UpdateDynamicThingGroupHeaders;
    request: UpdateDynamicThingGroupRequestBody;
}
export declare class UpdateDynamicThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDynamicThingGroupResponse?: shared.UpdateDynamicThingGroupResponse;
    versionConflictException?: any;
}
