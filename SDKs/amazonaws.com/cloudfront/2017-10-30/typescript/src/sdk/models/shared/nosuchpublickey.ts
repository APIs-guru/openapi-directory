import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NoSuchPublicKey
/** 
 * The specified public key doesn't exist.
**/
export class NoSuchPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
