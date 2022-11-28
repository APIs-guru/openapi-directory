import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeystoreItems } from "./keystoreitems";



export class KeystoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: KeystoreItems })
  aliases?: KeystoreItems[];

  @SpeakeasyMetadata()
  exists?: boolean;
}
