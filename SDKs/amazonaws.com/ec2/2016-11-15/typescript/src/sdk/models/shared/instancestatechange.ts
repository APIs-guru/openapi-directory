import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceState } from "./instancestate";



// InstanceStateChange
/** 
 * Describes an instance state change.
**/
export class InstanceStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentState?: InstanceState;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  previousState?: InstanceState;
}
