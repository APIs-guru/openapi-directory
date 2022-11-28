import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// AddTagsToOnPremisesInstancesInput
/** 
 * Represents the input of, and adds tags to, an on-premises instance operation.
**/
export class AddTagsToOnPremisesInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];
}
