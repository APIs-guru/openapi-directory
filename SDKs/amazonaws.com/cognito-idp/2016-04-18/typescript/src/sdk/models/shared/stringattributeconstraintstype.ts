import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StringAttributeConstraintsType
/** 
 * The constraints associated with a string attribute.
**/
export class StringAttributeConstraintsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxLength" })
  maxLength?: string;

  @SpeakeasyMetadata({ data: "json, name=MinLength" })
  minLength?: string;
}
