import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
export declare class ListPullRequestsInput extends SpeakeasyBase {
    authorArn?: string;
    maxResults?: number;
    nextToken?: string;
    pullRequestStatus?: PullRequestStatusEnumEnum;
    repositoryName: string;
}
