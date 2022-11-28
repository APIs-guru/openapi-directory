import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";



// PollForJobsInput
/** 
 * Represents the input of a <code>PollForJobs</code> action.
**/
export class PollForJobsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=maxBatchSize" })
  maxBatchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=queryParam" })
  queryParam?: Map<string, string>;
}
