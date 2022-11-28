import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cipher } from "./cipher";



// SslPolicy
/** 
 * Information about a policy used for SSL negotiation.
**/
export class SslPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Cipher })
  ciphers?: Cipher[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  sslProtocols?: string[];
}
