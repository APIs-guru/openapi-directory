import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfile } from "./fieldlevelencryptionprofile";



export class CreateFieldLevelEncryptionProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}
