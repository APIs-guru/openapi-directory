import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubModule
/** 
 * Returns information about a submodule reference in a repository folder.
**/
export class SubModule extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
