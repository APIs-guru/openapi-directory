import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";
export declare class DescribePullRequestEventsInput extends SpeakeasyBase {
    actorArn?: string;
    maxResults?: number;
    nextToken?: string;
    pullRequestEventType?: PullRequestEventTypeEnum;
    pullRequestId: string;
}
