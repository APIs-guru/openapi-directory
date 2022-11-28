import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceGetAutoTerminationPolicy = "ElasticMapReduce.GetAutoTerminationPolicy"
}
export declare class GetAutoTerminationPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoTerminationPolicyXAmzTargetEnum;
}
export declare class GetAutoTerminationPolicyRequest extends SpeakeasyBase {
    headers: GetAutoTerminationPolicyHeaders;
    request: shared.GetAutoTerminationPolicyInput;
}
export declare class GetAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getAutoTerminationPolicyOutput?: shared.GetAutoTerminationPolicyOutput;
    statusCode: number;
}
