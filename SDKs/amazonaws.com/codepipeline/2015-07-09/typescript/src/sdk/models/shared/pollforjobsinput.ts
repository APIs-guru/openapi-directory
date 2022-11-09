import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeId } from "./actiontypeid";


// PollForJobsInput
/** 
 * Represents the input of a <code>PollForJobs</code> action.
**/
export class PollForJobsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @Metadata({ data: "json, name=maxBatchSize" })
  maxBatchSize?: number;

  @Metadata({ data: "json, name=queryParam" })
  queryParam?: Map<string, string>;
}
