import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryption } from "./fieldlevelencryption";



export class GetFieldLevelEncryptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryption?: FieldLevelEncryption;
}
