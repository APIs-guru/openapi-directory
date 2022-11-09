import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attribute
/** 
 * Represents a named directory attribute.
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
