import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyInUse
/** 
 * The specified public key is in use. 
**/
export class PublicKeyInUse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
