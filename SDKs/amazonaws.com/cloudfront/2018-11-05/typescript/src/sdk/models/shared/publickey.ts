import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyConfig } from "./publickeyconfig";



// PublicKey
/** 
 * A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
**/
export class PublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdTime: Date;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  publicKeyConfig: PublicKeyConfig;
}
