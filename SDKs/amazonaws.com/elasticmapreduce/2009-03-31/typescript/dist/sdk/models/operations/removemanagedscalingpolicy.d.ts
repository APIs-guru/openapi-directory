import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveManagedScalingPolicy = "ElasticMapReduce.RemoveManagedScalingPolicy"
}
export declare class RemoveManagedScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveManagedScalingPolicyXAmzTargetEnum;
}
export declare class RemoveManagedScalingPolicyRequest extends SpeakeasyBase {
    headers: RemoveManagedScalingPolicyHeaders;
    request: shared.RemoveManagedScalingPolicyInput;
}
export declare class RemoveManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    removeManagedScalingPolicyOutput?: Map<string, any>;
    statusCode: number;
}
