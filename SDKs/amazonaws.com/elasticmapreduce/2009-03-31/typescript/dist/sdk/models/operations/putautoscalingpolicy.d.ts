import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAutoScalingPolicyXAmzTargetEnum {
    ElasticMapReducePutAutoScalingPolicy = "ElasticMapReduce.PutAutoScalingPolicy"
}
export declare class PutAutoScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAutoScalingPolicyXAmzTargetEnum;
}
export declare class PutAutoScalingPolicyRequest extends SpeakeasyBase {
    headers: PutAutoScalingPolicyHeaders;
    request: shared.PutAutoScalingPolicyInput;
}
export declare class PutAutoScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    putAutoScalingPolicyOutput?: shared.PutAutoScalingPolicyOutput;
    statusCode: number;
}
