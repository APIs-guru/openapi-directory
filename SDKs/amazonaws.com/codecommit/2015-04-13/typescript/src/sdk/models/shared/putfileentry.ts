import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { SourceFileSpecifier } from "./sourcefilespecifier";


// PutFileEntry
/** 
 * Information about a file added or updated as part of a commit.
**/
export class PutFileEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileContent" })
  fileContent?: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=sourceFile" })
  sourceFile?: SourceFileSpecifier;
}
