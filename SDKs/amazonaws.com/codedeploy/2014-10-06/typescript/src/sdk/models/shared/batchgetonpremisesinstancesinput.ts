import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetOnPremisesInstancesInput
/** 
 * Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
**/
export class BatchGetOnPremisesInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];
}
