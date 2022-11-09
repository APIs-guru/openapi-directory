import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { ReplacementTypeEnumEnum } from "./replacementtypeenumenum";


// ReplaceContentEntry
/** 
 * Information about a replacement content entry in the conflict of a merge or pull request operation.
**/
export class ReplaceContentEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=replacementType" })
  replacementType: ReplacementTypeEnumEnum;
}
