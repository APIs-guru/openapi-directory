import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
/**
 * Represents the input of a <code>PollForJobs</code> action.
**/
export declare class PollForJobsInput extends SpeakeasyBase {
    actionTypeId: ActionTypeId;
    maxBatchSize?: number;
    queryParam?: Map<string, string>;
}
