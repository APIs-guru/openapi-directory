import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
**/
export declare class GitHubCodeDestination extends SpeakeasyBase {
    description?: string;
    issuesEnabled: boolean;
    name: string;
    owner: string;
    privateRepository: boolean;
    token: string;
    type: string;
}
