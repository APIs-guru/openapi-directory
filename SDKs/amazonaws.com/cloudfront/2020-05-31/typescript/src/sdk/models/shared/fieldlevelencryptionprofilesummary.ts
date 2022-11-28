import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntities } from "./encryptionentities";



// FieldLevelEncryptionProfileSummary
/** 
 * The field-level encryption profile summary.
**/
export class FieldLevelEncryptionProfileSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  encryptionEntities: EncryptionEntities;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  name: string;
}
