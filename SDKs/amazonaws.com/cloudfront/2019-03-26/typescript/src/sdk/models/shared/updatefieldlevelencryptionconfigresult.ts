import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryption } from "./fieldlevelencryption";



export class UpdateFieldLevelEncryptionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryption?: FieldLevelEncryption;
}
