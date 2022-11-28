import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValue
/** 
 * A key-value pair.
**/
export class KeyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
