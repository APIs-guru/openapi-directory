import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutScalingPolicyActionEnum {
    PutScalingPolicy = "PutScalingPolicy"
}
export declare enum PostPutScalingPolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostPutScalingPolicyQueryParams extends SpeakeasyBase {
    action: PostPutScalingPolicyActionEnum;
    version: PostPutScalingPolicyVersionEnum;
}
export declare class PostPutScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutScalingPolicyRequest extends SpeakeasyBase {
    queryParams: PostPutScalingPolicyQueryParams;
    headers: PostPutScalingPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostPutScalingPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
