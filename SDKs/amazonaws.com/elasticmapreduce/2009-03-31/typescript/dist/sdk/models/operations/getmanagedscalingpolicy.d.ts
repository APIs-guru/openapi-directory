import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReduceGetManagedScalingPolicy = "ElasticMapReduce.GetManagedScalingPolicy"
}
export declare class GetManagedScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetManagedScalingPolicyXAmzTargetEnum;
}
export declare class GetManagedScalingPolicyRequest extends SpeakeasyBase {
    headers: GetManagedScalingPolicyHeaders;
    request: shared.GetManagedScalingPolicyInput;
}
export declare class GetManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getManagedScalingPolicyOutput?: shared.GetManagedScalingPolicyOutput;
    statusCode: number;
}
