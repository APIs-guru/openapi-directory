import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitHubCodeDestination
/** 
 * Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
**/
export class GitHubCodeDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=issuesEnabled" })
  issuesEnabled: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owner" })
  owner: string;

  @Metadata({ data: "json, name=privateRepository" })
  privateRepository: boolean;

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
