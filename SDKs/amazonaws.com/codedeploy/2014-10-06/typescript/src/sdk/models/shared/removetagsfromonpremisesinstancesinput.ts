import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// RemoveTagsFromOnPremisesInstancesInput
/** 
 * Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
**/
export class RemoveTagsFromOnPremisesInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];
}
