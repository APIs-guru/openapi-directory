import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitHubLocation
/** 
 * Information about the location of application artifacts stored in GitHub.
**/
export class GitHubLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=repository" })
  repository?: string;
}
