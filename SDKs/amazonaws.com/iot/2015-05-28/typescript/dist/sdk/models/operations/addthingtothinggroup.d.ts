import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddThingToThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddThingToThingGroupRequestBody extends SpeakeasyBase {
    overrideDynamicGroups?: boolean;
    thingArn?: string;
    thingGroupArn?: string;
    thingGroupName?: string;
    thingName?: string;
}
export declare class AddThingToThingGroupRequest extends SpeakeasyBase {
    headers: AddThingToThingGroupHeaders;
    request: AddThingToThingGroupRequestBody;
}
export declare class AddThingToThingGroupResponse extends SpeakeasyBase {
    addThingToThingGroupResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
