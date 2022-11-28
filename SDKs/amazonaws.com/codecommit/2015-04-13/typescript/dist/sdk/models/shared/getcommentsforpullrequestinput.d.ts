import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCommentsForPullRequestInput extends SpeakeasyBase {
    afterCommitId?: string;
    beforeCommitId?: string;
    maxResults?: number;
    nextToken?: string;
    pullRequestId: string;
    repositoryName?: string;
}
