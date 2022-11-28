import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReducePutManagedScalingPolicy = "ElasticMapReduce.PutManagedScalingPolicy"
}
export declare class PutManagedScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutManagedScalingPolicyXAmzTargetEnum;
}
export declare class PutManagedScalingPolicyRequest extends SpeakeasyBase {
    headers: PutManagedScalingPolicyHeaders;
    request: shared.PutManagedScalingPolicyInput;
}
export declare class PutManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    putManagedScalingPolicyOutput?: Map<string, any>;
    statusCode: number;
}
