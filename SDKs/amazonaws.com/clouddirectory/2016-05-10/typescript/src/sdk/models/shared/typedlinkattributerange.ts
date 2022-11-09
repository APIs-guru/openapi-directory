import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedAttributeValueRange } from "./typedattributevaluerange";


// TypedLinkAttributeRange
/** 
 * Identifies the range of attributes that are used by a specified filter.
**/
export class TypedLinkAttributeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=Range" })
  range: TypedAttributeValueRange;
}
