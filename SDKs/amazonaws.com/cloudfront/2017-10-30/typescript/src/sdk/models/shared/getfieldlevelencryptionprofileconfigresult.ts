import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileConfig } from "./fieldlevelencryptionprofileconfig";



export class GetFieldLevelEncryptionProfileConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;
}
