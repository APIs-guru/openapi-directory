import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateChange } from "./instancestatechange";



export class StopInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceStateChange })
  stoppingInstances?: InstanceStateChange[];
}
