import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInfo } from "./instanceinfo";



// BatchGetOnPremisesInstancesOutput
/** 
 * Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
**/
export class BatchGetOnPremisesInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceInfos", elemType: InstanceInfo })
  instanceInfos?: InstanceInfo[];
}
