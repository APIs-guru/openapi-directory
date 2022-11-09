import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelectAttributesActivity
/** 
 * Used to create a new message using only the specified attributes from the original message.
**/
export class SelectAttributesActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
