import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateNameEnum } from "./instancestatenameenum";



// InstanceState
/** 
 * Describes the current state of an instance.
**/
export class InstanceState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: number;

  @SpeakeasyMetadata()
  name?: InstanceStateNameEnum;
}
