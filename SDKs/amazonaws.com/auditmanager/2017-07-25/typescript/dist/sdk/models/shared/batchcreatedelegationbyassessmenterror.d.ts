import { SpeakeasyBase } from "../../../internal/utils";
import { CreateDelegationRequest } from "./createdelegationrequest";
/**
 *  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
**/
export declare class BatchCreateDelegationByAssessmentError extends SpeakeasyBase {
    createDelegationRequest?: CreateDelegationRequest;
    errorCode?: string;
    errorMessage?: string;
}
