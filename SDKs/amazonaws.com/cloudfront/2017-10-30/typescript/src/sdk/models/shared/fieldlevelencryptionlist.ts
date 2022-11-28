import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionSummary } from "./fieldlevelencryptionsummary";



// FieldLevelEncryptionList
/** 
 * List of field-level encrpytion configurations.
**/
export class FieldLevelEncryptionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FieldLevelEncryptionSummary })
  items?: FieldLevelEncryptionSummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
