import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// RemoveTagsFromOnPremisesInstancesInput
/** 
 * Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
**/
export class RemoveTagsFromOnPremisesInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];
}
