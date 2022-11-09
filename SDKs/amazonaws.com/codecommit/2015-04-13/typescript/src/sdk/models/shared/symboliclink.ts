import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


// SymbolicLink
/** 
 * Returns information about a symbolic link in a repository folder.
**/
export class SymbolicLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @Metadata({ data: "json, name=blobId" })
  blobId?: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
