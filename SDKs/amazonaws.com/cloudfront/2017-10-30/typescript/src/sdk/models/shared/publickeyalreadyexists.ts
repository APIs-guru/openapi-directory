import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyAlreadyExists
/** 
 * The specified public key already exists.
**/
export class PublicKeyAlreadyExists extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
