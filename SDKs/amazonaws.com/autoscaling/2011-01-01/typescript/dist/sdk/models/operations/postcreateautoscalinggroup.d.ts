import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateAutoScalingGroupActionEnum {
    CreateAutoScalingGroup = "CreateAutoScalingGroup"
}
export declare enum PostCreateAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostCreateAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: PostCreateAutoScalingGroupActionEnum;
    version: PostCreateAutoScalingGroupVersionEnum;
}
export declare class PostCreateAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateAutoScalingGroupQueryParams;
    headers: PostCreateAutoScalingGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
