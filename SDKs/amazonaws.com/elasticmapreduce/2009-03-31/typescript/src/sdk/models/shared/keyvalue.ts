import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValue
/** 
 * A key-value pair.
**/
export class KeyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
