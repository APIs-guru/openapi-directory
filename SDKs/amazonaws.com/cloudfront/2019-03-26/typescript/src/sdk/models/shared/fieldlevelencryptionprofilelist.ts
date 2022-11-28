import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileSummary } from "./fieldlevelencryptionprofilesummary";



// FieldLevelEncryptionProfileList
/** 
 * List of field-level encryption profiles.
**/
export class FieldLevelEncryptionProfileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FieldLevelEncryptionProfileSummary })
  items?: FieldLevelEncryptionProfileSummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
