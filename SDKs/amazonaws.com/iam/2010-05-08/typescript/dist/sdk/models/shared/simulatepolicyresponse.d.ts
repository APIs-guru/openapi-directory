import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";
/**
 * Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
**/
export declare class SimulatePolicyResponse extends SpeakeasyBase {
    evaluationResults?: EvaluationResult[];
    isTruncated?: boolean;
    marker?: string;
}
