import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteDelegationByAssessmentError } from "./batchdeletedelegationbyassessmenterror";



export class BatchDeleteDelegationByAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchDeleteDelegationByAssessmentError })
  errors?: BatchDeleteDelegationByAssessmentError[];
}
