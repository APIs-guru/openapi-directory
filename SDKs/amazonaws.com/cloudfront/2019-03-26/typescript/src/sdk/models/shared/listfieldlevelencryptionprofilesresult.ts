import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileList } from "./fieldlevelencryptionprofilelist";



export class ListFieldLevelEncryptionProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
}
