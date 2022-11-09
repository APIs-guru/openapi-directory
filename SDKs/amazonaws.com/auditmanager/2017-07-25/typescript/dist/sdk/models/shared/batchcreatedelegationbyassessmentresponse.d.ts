import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Delegation } from "./delegation";
import { BatchCreateDelegationByAssessmentError } from "./batchcreatedelegationbyassessmenterror";
export declare class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
    delegations?: Delegation[];
    errors?: BatchCreateDelegationByAssessmentError[];
}
