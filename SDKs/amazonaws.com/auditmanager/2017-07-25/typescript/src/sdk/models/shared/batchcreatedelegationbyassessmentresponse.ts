import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Delegation } from "./delegation";
import { BatchCreateDelegationByAssessmentError } from "./batchcreatedelegationbyassessmenterror";



export class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegations", elemType: Delegation })
  delegations?: Delegation[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchCreateDelegationByAssessmentError })
  errors?: BatchCreateDelegationByAssessmentError[];
}
