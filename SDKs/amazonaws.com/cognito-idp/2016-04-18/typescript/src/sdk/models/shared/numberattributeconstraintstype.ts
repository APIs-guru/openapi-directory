import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumberAttributeConstraintsType
/** 
 * The minimum and maximum value of an attribute that is of the number data type.
**/
export class NumberAttributeConstraintsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue?: string;
}
