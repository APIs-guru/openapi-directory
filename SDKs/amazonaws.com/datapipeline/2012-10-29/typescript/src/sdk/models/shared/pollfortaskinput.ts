import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceIdentity } from "./instanceidentity";



// PollForTaskInput
/** 
 * Contains the parameters for PollForTask.
**/
export class PollForTaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceIdentity" })
  instanceIdentity?: InstanceIdentity;

  @SpeakeasyMetadata({ data: "json, name=workerGroup" })
  workerGroup: string;
}
