import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeType
/** 
 * Specifies whether the attribute is standard or custom.
**/
export class AttributeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
