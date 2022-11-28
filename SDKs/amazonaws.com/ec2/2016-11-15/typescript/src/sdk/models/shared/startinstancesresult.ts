import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateChange } from "./instancestatechange";



export class StartInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceStateChange })
  startingInstances?: InstanceStateChange[];
}
