import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfile } from "./fieldlevelencryptionprofile";



export class GetFieldLevelEncryptionProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}
