import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubModule
/** 
 * Returns information about a submodule reference in a repository folder.
**/
export class SubModule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolutePath" })
  absolutePath?: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;
}
