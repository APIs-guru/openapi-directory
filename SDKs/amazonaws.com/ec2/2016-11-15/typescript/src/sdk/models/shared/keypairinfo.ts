import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyTypeEnum } from "./keytypeenum";
import { Tag } from "./tag";



// KeyPairInfo
/** 
 * Describes a key pair.
**/
export class KeyPairInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyFingerprint?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  keyPairId?: string;

  @SpeakeasyMetadata()
  keyType?: KeyTypeEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
