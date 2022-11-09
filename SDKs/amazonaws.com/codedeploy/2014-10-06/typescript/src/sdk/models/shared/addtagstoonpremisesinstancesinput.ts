import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// AddTagsToOnPremisesInstancesInput
/** 
 * Represents the input of, and adds tags to, an on-premises instance operation.
**/
export class AddTagsToOnPremisesInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];
}
