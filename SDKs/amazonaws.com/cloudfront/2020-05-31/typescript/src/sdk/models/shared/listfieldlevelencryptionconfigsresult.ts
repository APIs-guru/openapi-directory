import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionList } from "./fieldlevelencryptionlist";



export class ListFieldLevelEncryptionConfigsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionList?: FieldLevelEncryptionList;
}
