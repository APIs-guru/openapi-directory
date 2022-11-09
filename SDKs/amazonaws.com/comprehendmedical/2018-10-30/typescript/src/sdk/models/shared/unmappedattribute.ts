import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";


// UnmappedAttribute
/** 
 *  An attribute that we extracted, but were unable to relate to an entity. 
**/
export class UnmappedAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attribute" })
  attribute?: Attribute;

  @Metadata({ data: "json, name=Type" })
  type?: EntityTypeEnum;
}
