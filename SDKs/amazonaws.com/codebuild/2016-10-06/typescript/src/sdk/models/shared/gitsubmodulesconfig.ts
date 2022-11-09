import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitSubmodulesConfig
/** 
 *  Information about the Git submodules configuration for an CodeBuild build project. 
**/
export class GitSubmodulesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=fetchSubmodules" })
  fetchSubmodules: boolean;
}
