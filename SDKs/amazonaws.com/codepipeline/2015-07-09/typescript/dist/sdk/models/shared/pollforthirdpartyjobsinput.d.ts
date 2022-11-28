import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
/**
 * Represents the input of a <code>PollForThirdPartyJobs</code> action.
**/
export declare class PollForThirdPartyJobsInput extends SpeakeasyBase {
    actionTypeId: ActionTypeId;
    maxBatchSize?: number;
}
