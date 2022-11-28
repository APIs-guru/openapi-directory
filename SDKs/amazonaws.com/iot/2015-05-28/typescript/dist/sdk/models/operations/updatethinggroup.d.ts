import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class UpdateThingGroupHeaders extends SpeakeasyBase {
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
export declare class UpdateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class UpdateThingGroupRequestBody extends SpeakeasyBase {
    expectedVersion?: number;
    thingGroupProperties: UpdateThingGroupRequestBodyThingGroupProperties;
}
export declare class UpdateThingGroupRequest extends SpeakeasyBase {
    pathParams: UpdateThingGroupPathParams;
    headers: UpdateThingGroupHeaders;
    request: UpdateThingGroupRequestBody;
}
export declare class UpdateThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateThingGroupResponse?: shared.UpdateThingGroupResponse;
    versionConflictException?: any;
}
