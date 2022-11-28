import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddThingToBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddThingToBillingGroupRequestBody extends SpeakeasyBase {
    billingGroupArn?: string;
    billingGroupName?: string;
    thingArn?: string;
    thingName?: string;
}
export declare class AddThingToBillingGroupRequest extends SpeakeasyBase {
    headers: AddThingToBillingGroupHeaders;
    request: AddThingToBillingGroupRequestBody;
}
export declare class AddThingToBillingGroupResponse extends SpeakeasyBase {
    addThingToBillingGroupResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
