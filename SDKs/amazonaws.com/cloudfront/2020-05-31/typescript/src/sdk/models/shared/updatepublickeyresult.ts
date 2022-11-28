import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";



export class UpdatePublicKeyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicKey?: PublicKey;
}
