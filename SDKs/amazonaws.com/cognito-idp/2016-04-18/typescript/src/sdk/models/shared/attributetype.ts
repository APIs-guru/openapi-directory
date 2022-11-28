import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeType
/** 
 * Specifies whether the attribute is standard or custom.
**/
export class AttributeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
