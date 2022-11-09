import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


// FileMetadata
/** 
 * A file to be added, updated, or deleted as part of a commit.
**/
export class FileMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @Metadata({ data: "json, name=blobId" })
  blobId?: string;

  @Metadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;
}
