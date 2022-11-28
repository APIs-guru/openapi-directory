import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
**/
export declare class BatchDeleteDelegationByAssessmentError extends SpeakeasyBase {
    delegationId?: string;
    errorCode?: string;
    errorMessage?: string;
}
