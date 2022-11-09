import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddAttributesActivity
/** 
 * An activity that adds other attributes based on existing attributes in the message.
**/
export class AddAttributesActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
