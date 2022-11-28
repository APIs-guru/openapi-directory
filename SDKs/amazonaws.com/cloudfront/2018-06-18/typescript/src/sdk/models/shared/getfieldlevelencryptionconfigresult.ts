import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionConfig } from "./fieldlevelencryptionconfig";



export class GetFieldLevelEncryptionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
}
