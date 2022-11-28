import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";



export class GetPublicKeyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicKey?: PublicKey;
}
