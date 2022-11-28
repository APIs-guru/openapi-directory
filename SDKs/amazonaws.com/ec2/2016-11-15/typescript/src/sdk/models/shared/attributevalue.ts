import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValue
/** 
 * Describes a value for a resource attribute that is a String.
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: string;
}
