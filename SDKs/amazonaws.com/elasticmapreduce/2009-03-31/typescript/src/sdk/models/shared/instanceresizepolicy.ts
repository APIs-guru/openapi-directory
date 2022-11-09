import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceResizePolicy
/** 
 * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
**/
export class InstanceResizePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceTerminationTimeout" })
  instanceTerminationTimeout?: number;

  @Metadata({ data: "json, name=InstancesToProtect" })
  instancesToProtect?: string[];

  @Metadata({ data: "json, name=InstancesToTerminate" })
  instancesToTerminate?: string[];
}
