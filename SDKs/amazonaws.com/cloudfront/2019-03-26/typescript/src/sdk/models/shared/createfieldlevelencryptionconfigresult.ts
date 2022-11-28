import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryption } from "./fieldlevelencryption";



export class CreateFieldLevelEncryptionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryption?: FieldLevelEncryption;
}
