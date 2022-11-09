import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumberAttributeConstraintsType
/** 
 * The minimum and maximum value of an attribute that is of the number data type.
**/
export class NumberAttributeConstraintsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue?: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue?: string;
}
