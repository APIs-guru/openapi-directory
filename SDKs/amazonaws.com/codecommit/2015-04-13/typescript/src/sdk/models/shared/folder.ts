import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Folder
/** 
 * Returns information about a folder in a repository.
**/
export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
