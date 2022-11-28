import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { ReplacementTypeEnumEnum } from "./replacementtypeenumenum";



// ReplaceContentEntry
/** 
 * Information about a replacement content entry in the conflict of a merge or pull request operation.
**/
export class ReplaceContentEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=replacementType" })
  replacementType: ReplacementTypeEnumEnum;
}
