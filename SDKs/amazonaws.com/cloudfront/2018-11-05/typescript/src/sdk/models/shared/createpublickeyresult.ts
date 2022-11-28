import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";



export class CreatePublicKeyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicKey?: PublicKey;
}
