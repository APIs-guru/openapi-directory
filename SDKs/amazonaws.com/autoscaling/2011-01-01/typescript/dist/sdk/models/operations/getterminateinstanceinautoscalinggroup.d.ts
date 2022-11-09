import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}
export declare enum GetTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetTerminateInstanceInAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: GetTerminateInstanceInAutoScalingGroupActionEnum;
    instanceId: string;
    shouldDecrementDesiredCapacity: boolean;
    version: GetTerminateInstanceInAutoScalingGroupVersionEnum;
}
export declare class GetTerminateInstanceInAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: GetTerminateInstanceInAutoScalingGroupQueryParams;
    headers: GetTerminateInstanceInAutoScalingGroupHeaders;
}
export declare class GetTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
