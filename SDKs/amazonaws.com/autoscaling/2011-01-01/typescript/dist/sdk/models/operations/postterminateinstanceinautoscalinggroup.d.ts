import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}
export declare enum PostTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostTerminateInstanceInAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: PostTerminateInstanceInAutoScalingGroupActionEnum;
    version: PostTerminateInstanceInAutoScalingGroupVersionEnum;
}
export declare class PostTerminateInstanceInAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: PostTerminateInstanceInAutoScalingGroupQueryParams;
    headers: PostTerminateInstanceInAutoScalingGroupHeaders;
    request?: Uint8Array;
}
export declare class PostTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
