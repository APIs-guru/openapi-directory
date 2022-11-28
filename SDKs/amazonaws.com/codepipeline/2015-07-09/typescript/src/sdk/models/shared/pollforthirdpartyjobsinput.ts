import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";



// PollForThirdPartyJobsInput
/** 
 * Represents the input of a <code>PollForThirdPartyJobs</code> action.
**/
export class PollForThirdPartyJobsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=maxBatchSize" })
  maxBatchSize?: number;
}
