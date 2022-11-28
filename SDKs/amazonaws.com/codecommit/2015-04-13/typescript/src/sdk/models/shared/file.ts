import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



// File
/** 
 * Returns information about a file in a repository.
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
