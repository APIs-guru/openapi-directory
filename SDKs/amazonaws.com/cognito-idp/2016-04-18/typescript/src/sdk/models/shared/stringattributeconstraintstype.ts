import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StringAttributeConstraintsType
/** 
 * The constraints associated with a string attribute.
**/
export class StringAttributeConstraintsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxLength" })
  maxLength?: string;

  @Metadata({ data: "json, name=MinLength" })
  minLength?: string;
}
