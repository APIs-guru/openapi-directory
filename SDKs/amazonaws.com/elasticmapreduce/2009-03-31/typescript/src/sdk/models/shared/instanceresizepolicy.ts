import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceResizePolicy
/** 
 * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
**/
export class InstanceResizePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceTerminationTimeout" })
  instanceTerminationTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesToProtect" })
  instancesToProtect?: string[];

  @SpeakeasyMetadata({ data: "json, name=InstancesToTerminate" })
  instancesToTerminate?: string[];
}
