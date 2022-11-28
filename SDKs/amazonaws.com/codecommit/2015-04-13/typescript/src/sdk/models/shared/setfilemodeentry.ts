import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



// SetFileModeEntry
/** 
 * Information about the file mode changes.
**/
export class SetFileModeEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;
}
