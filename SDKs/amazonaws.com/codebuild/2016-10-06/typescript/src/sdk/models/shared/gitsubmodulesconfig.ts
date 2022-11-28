import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitSubmodulesConfig
/** 
 *  Information about the Git submodules configuration for an CodeBuild build project. 
**/
export class GitSubmodulesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fetchSubmodules" })
  fetchSubmodules: boolean;
}
