import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * Metadata that you can assign to a delivery stream, consisting of a key-value pair.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
