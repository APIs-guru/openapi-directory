import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Folder
/** 
 * Returns information about a folder in a repository.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
