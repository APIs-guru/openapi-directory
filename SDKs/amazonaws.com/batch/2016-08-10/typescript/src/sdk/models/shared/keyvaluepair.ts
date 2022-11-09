import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValuePair
/** 
 * A key-value pair object.
**/
export class KeyValuePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
