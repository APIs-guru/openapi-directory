import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteDelegationByAssessmentError
/** 
 *  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchDeleteDelegationByAssessmentError extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegationId" })
  delegationId?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
