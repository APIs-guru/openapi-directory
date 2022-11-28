import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReducePutAutoTerminationPolicy = "ElasticMapReduce.PutAutoTerminationPolicy"
}
export declare class PutAutoTerminationPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAutoTerminationPolicyXAmzTargetEnum;
}
export declare class PutAutoTerminationPolicyRequest extends SpeakeasyBase {
    headers: PutAutoTerminationPolicyHeaders;
    request: shared.PutAutoTerminationPolicyInput;
}
export declare class PutAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    putAutoTerminationPolicyOutput?: Map<string, any>;
    statusCode: number;
}
