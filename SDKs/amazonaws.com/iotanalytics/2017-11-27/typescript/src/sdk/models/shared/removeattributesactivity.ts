import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveAttributesActivity
/** 
 * An activity that removes attributes from a message.
**/
export class RemoveAttributesActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
