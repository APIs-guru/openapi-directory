import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeId } from "./actiontypeid";


// PollForThirdPartyJobsInput
/** 
 * Represents the input of a <code>PollForThirdPartyJobs</code> action.
**/
export class PollForThirdPartyJobsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @Metadata({ data: "json, name=maxBatchSize" })
  maxBatchSize?: number;
}
