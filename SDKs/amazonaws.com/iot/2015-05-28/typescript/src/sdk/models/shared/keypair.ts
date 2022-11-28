import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPair
/** 
 * Describes a key pair.
**/
export class KeyPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
