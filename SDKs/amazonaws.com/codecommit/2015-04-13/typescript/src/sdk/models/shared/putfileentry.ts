import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { SourceFileSpecifier } from "./sourcefilespecifier";



// PutFileEntry
/** 
 * Information about a file added or updated as part of a commit.
**/
export class PutFileEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileContent" })
  fileContent?: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFile" })
  sourceFile?: SourceFileSpecifier;
}
