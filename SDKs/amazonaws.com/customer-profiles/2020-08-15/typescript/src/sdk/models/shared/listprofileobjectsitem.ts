import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListProfileObjectsItem
/** 
 * A ProfileObject in a list of ProfileObjects.
**/
export class ListProfileObjectsItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectTypeName" })
  objectTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileObjectUniqueKey" })
  profileObjectUniqueKey?: string;
}
