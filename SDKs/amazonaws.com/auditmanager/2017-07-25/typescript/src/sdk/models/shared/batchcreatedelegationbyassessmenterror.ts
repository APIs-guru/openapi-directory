import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateDelegationRequest } from "./createdelegationrequest";


// BatchCreateDelegationByAssessmentError
/** 
 *  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchCreateDelegationByAssessmentError extends SpeakeasyBase {
  @Metadata({ data: "json, name=createDelegationRequest" })
  createDelegationRequest?: CreateDelegationRequest;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
