import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoTerminationPolicy = "ElasticMapReduce.RemoveAutoTerminationPolicy"
}
export declare class RemoveAutoTerminationPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAutoTerminationPolicyXAmzTargetEnum;
}
export declare class RemoveAutoTerminationPolicyRequest extends SpeakeasyBase {
    headers: RemoveAutoTerminationPolicyHeaders;
    request: shared.RemoveAutoTerminationPolicyInput;
}
export declare class RemoveAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    removeAutoTerminationPolicyOutput?: Map<string, any>;
    statusCode: number;
}
