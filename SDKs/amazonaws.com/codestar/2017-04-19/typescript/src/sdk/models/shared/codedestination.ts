import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeCommitCodeDestination } from "./codecommitcodedestination";
import { GitHubCodeDestination } from "./githubcodedestination";


// CodeDestination
/** 
 * The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
**/
export class CodeDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeCommit" })
  codeCommit?: CodeCommitCodeDestination;

  @Metadata({ data: "json, name=gitHub" })
  gitHub?: GitHubCodeDestination;
}
