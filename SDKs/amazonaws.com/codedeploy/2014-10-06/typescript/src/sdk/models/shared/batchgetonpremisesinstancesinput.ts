import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetOnPremisesInstancesInput
/** 
 * Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
**/
export class BatchGetOnPremisesInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];
}
