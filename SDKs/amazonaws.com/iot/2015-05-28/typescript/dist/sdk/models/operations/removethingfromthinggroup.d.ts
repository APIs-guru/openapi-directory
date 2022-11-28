import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveThingFromThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveThingFromThingGroupRequestBody extends SpeakeasyBase {
    thingArn?: string;
    thingGroupArn?: string;
    thingGroupName?: string;
    thingName?: string;
}
export declare class RemoveThingFromThingGroupRequest extends SpeakeasyBase {
    headers: RemoveThingFromThingGroupHeaders;
    request: RemoveThingFromThingGroupRequestBody;
}
export declare class RemoveThingFromThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    removeThingFromThingGroupResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
