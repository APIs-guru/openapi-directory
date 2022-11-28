import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
/**
 * Represents the input of a <code>PutJobFailureResult</code> action.
**/
export declare class PutJobFailureResultInput extends SpeakeasyBase {
    failureDetails: FailureDetails;
    jobId: string;
}
