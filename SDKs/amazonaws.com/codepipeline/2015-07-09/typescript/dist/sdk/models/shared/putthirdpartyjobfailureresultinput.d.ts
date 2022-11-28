import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
/**
 * Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
**/
export declare class PutThirdPartyJobFailureResultInput extends SpeakeasyBase {
    clientToken: string;
    failureDetails: FailureDetails;
    jobId: string;
}
