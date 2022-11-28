import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValueRange } from "./typedattributevaluerange";



// TypedLinkAttributeRange
/** 
 * Identifies the range of attributes that are used by a specified filter.
**/
export class TypedLinkAttributeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=Range" })
  range: TypedAttributeValueRange;
}
