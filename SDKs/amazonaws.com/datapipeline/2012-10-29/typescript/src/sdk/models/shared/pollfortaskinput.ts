import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceIdentity } from "./instanceidentity";


// PollForTaskInput
/** 
 * Contains the parameters for PollForTask.
**/
export class PollForTaskInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=instanceIdentity" })
  instanceIdentity?: InstanceIdentity;

  @Metadata({ data: "json, name=workerGroup" })
  workerGroup: string;
}
