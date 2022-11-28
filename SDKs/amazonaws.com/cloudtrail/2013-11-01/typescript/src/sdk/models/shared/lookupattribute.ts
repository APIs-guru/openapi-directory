import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LookupAttributeKeyEnum } from "./lookupattributekeyenum";



// LookupAttribute
/** 
 * Specifies an attribute and value that filter the events returned.
**/
export class LookupAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeKey" })
  attributeKey: LookupAttributeKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=AttributeValue" })
  attributeValue: string;
}
