import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeBooleanValue
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class AttributeBooleanValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: boolean;
}
