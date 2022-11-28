import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribute
/** 
 * Represents a named directory attribute.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
