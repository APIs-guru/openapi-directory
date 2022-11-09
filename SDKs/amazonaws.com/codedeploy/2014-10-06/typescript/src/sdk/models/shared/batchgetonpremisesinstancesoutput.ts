import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceInfo } from "./instanceinfo";


// BatchGetOnPremisesInstancesOutput
/** 
 * Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
**/
export class BatchGetOnPremisesInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceInfos", elemType: shared.InstanceInfo })
  instanceInfos?: InstanceInfo[];
}
