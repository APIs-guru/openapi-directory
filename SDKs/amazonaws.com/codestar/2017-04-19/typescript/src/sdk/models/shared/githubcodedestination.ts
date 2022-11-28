import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitHubCodeDestination
/** 
 * Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
**/
export class GitHubCodeDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=issuesEnabled" })
  issuesEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "json, name=privateRepository" })
  privateRepository: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
