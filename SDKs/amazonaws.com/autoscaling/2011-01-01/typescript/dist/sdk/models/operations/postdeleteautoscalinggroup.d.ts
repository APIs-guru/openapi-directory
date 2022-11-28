import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteAutoScalingGroupActionEnum {
    DeleteAutoScalingGroup = "DeleteAutoScalingGroup"
}
export declare enum PostDeleteAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDeleteAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteAutoScalingGroupActionEnum;
    version: PostDeleteAutoScalingGroupVersionEnum;
}
export declare class PostDeleteAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteAutoScalingGroupQueryParams;
    headers: PostDeleteAutoScalingGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
