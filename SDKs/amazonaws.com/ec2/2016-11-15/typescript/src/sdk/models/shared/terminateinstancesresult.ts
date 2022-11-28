import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateChange } from "./instancestatechange";



export class TerminateInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceStateChange })
  terminatingInstances?: InstanceStateChange[];
}
