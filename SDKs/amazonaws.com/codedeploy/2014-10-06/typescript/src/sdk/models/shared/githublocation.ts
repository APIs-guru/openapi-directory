import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitHubLocation
/** 
 * Information about the location of application artifacts stored in GitHub.
**/
export class GitHubLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;
}
