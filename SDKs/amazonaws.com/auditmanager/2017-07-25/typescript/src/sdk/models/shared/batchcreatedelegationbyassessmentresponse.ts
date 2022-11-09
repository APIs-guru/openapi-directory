import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Delegation } from "./delegation";
import { BatchCreateDelegationByAssessmentError } from "./batchcreatedelegationbyassessmenterror";


export class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegations", elemType: shared.Delegation })
  delegations?: Delegation[];

  @Metadata({ data: "json, name=errors", elemType: shared.BatchCreateDelegationByAssessmentError })
  errors?: BatchCreateDelegationByAssessmentError[];
}
