import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidDefaultRootObject
/** 
 * The default root object file name is too big or contains an invalid character.
**/
export class InvalidDefaultRootObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
