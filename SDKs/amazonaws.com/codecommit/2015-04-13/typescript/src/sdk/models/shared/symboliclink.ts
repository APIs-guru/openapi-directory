import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



// SymbolicLink
/** 
 * Returns information about a symbolic link in a repository folder.
**/
export class SymbolicLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileMode" })
  fileMode?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
