import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchDeleteDelegationByAssessmentError } from "./batchdeletedelegationbyassessmenterror";


export class BatchDeleteDelegationByAssessmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.BatchDeleteDelegationByAssessmentError })
  errors?: BatchDeleteDelegationByAssessmentError[];
}
