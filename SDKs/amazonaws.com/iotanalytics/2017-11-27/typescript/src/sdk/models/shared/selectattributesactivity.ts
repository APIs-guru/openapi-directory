import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelectAttributesActivity
/** 
 * Used to create a new message using only the specified attributes from the original message.
**/
export class SelectAttributesActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
