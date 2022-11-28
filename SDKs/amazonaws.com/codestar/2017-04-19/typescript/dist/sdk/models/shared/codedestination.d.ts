import { SpeakeasyBase } from "../../../internal/utils";
import { CodeCommitCodeDestination } from "./codecommitcodedestination";
import { GitHubCodeDestination } from "./githubcodedestination";
/**
 * The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
**/
export declare class CodeDestination extends SpeakeasyBase {
    codeCommit?: CodeCommitCodeDestination;
    gitHub?: GitHubCodeDestination;
}
