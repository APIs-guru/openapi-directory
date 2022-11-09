import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyPair
/** 
 * Describes a key pair.
**/
export class KeyPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
