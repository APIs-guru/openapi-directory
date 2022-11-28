import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateDelegationRequest } from "./createdelegationrequest";



// BatchCreateDelegationByAssessmentError
/** 
 *  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchCreateDelegationByAssessmentError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createDelegationRequest" })
  createDelegationRequest?: CreateDelegationRequest;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
