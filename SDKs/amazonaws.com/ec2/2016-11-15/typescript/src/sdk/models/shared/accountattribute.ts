import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAttributeValue } from "./accountattributevalue";



// AccountAttribute
/** 
 * Describes an account attribute.
**/
export class AccountAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeName?: string;

  @SpeakeasyMetadata({ elemType: AccountAttributeValue })
  attributeValues?: AccountAttributeValue[];
}
