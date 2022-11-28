import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveAttributesActivity
/** 
 * An activity that removes attributes from a message.
**/
export class RemoveAttributesActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
