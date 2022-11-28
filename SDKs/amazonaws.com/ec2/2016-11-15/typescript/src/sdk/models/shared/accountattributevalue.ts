import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountAttributeValue
/** 
 * Describes a value of an account attribute.
**/
export class AccountAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeValue?: string;
}
