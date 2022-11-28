import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveAutoScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoScalingPolicy = "ElasticMapReduce.RemoveAutoScalingPolicy"
}
export declare class RemoveAutoScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAutoScalingPolicyXAmzTargetEnum;
}
export declare class RemoveAutoScalingPolicyRequest extends SpeakeasyBase {
    headers: RemoveAutoScalingPolicyHeaders;
    request: shared.RemoveAutoScalingPolicyInput;
}
export declare class RemoveAutoScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    removeAutoScalingPolicyOutput?: Map<string, any>;
    statusCode: number;
}
