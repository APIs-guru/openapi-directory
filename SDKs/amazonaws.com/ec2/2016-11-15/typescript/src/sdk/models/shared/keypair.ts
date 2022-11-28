import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// KeyPair
/** 
 * Describes a key pair.
**/
export class KeyPair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyFingerprint?: string;

  @SpeakeasyMetadata()
  keyMaterial?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  keyPairId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
