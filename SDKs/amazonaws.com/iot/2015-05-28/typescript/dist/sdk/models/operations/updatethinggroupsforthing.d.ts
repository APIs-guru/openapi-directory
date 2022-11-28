import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateThingGroupsForThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateThingGroupsForThingRequestBody extends SpeakeasyBase {
    overrideDynamicGroups?: boolean;
    thingGroupsToAdd?: string[];
    thingGroupsToRemove?: string[];
    thingName?: string;
}
export declare class UpdateThingGroupsForThingRequest extends SpeakeasyBase {
    headers: UpdateThingGroupsForThingHeaders;
    request: UpdateThingGroupsForThingRequestBody;
}
export declare class UpdateThingGroupsForThingResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateThingGroupsForThingResponse?: Map<string, any>;
}
