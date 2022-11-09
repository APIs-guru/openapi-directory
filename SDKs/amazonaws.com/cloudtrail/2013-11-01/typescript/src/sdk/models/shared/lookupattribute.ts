import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LookupAttributeKeyEnum } from "./lookupattributekeyenum";


// LookupAttribute
/** 
 * Specifies an attribute and value that filter the events returned.
**/
export class LookupAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeKey" })
  attributeKey: LookupAttributeKeyEnum;

  @Metadata({ data: "json, name=AttributeValue" })
  attributeValue: string;
}
