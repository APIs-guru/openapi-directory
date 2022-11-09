import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListProfileObjectsItem
/** 
 * A ProfileObject in a list of ProfileObjects.
**/
export class ListProfileObjectsItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Object" })
  object?: string;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName?: string;

  @Metadata({ data: "json, name=ProfileObjectUniqueKey" })
  profileObjectUniqueKey?: string;
}
