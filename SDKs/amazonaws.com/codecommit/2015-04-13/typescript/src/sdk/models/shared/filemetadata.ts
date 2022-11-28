import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



// FileMetadata
/** 
 * A file to be added, updated, or deleted as part of a commit.
**/
export class FileMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;
}
