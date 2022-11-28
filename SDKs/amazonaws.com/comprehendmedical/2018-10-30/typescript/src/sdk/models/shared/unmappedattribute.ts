import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";



// UnmappedAttribute
/** 
 *  An attribute that we extracted, but were unable to relate to an entity. 
**/
export class UnmappedAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attribute" })
  attribute?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EntityTypeEnum;
}
