import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ImportKeyPairResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyFingerprint?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  keyPairId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
