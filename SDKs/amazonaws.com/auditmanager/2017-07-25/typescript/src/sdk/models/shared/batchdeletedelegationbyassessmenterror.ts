import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteDelegationByAssessmentError
/** 
 *  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchDeleteDelegationByAssessmentError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegationId" })
  delegationId?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
