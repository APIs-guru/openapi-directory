import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


// SetFileModeEntry
/** 
 * Information about the file mode changes.
**/
export class SetFileModeEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileMode" })
  fileMode: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;
}
