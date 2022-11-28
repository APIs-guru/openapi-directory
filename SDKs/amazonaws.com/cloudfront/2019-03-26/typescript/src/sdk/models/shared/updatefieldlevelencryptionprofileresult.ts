import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfile } from "./fieldlevelencryptionprofile";



export class UpdateFieldLevelEncryptionProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}
