import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeystoreChainItems } from "./keystorechainitems";



export class KeystoreItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithm?: string;

  @SpeakeasyMetadata()
  alias?: string;

  @SpeakeasyMetadata({ elemType: KeystoreChainItems })
  chain?: KeystoreChainItems[];

  @SpeakeasyMetadata()
  entryType?: string;

  @SpeakeasyMetadata()
  format?: string;
}
