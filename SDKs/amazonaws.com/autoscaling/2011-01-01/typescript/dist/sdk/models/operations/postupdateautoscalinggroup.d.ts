import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateAutoScalingGroupActionEnum {
    UpdateAutoScalingGroup = "UpdateAutoScalingGroup"
}
export declare enum PostUpdateAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostUpdateAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: PostUpdateAutoScalingGroupActionEnum;
    version: PostUpdateAutoScalingGroupVersionEnum;
}
export declare class PostUpdateAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: PostUpdateAutoScalingGroupQueryParams;
    headers: PostUpdateAutoScalingGroupHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
