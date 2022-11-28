import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValuePair
/** 
 * A key-value pair object.
**/
export class KeyValuePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
