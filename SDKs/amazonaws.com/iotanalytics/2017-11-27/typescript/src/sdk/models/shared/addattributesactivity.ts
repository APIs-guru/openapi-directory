import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddAttributesActivity
/** 
 * An activity that adds other attributes based on existing attributes in the message.
**/
export class AddAttributesActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
