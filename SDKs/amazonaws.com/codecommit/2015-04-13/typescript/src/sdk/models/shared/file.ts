import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


// File
/** 
 * Returns information about a file in a repository.
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @Metadata({ data: "json, name=blobId" })
  blobId?: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
