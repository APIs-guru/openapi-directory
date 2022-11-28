import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveThingFromBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveThingFromBillingGroupRequestBody extends SpeakeasyBase {
    billingGroupArn?: string;
    billingGroupName?: string;
    thingArn?: string;
    thingName?: string;
}
export declare class RemoveThingFromBillingGroupRequest extends SpeakeasyBase {
    headers: RemoveThingFromBillingGroupHeaders;
    request: RemoveThingFromBillingGroupRequestBody;
}
export declare class RemoveThingFromBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    removeThingFromBillingGroupResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
