import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";


export class DescribePullRequestEventsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actorArn" })
  actorArn?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pullRequestEventType" })
  pullRequestEventType?: PullRequestEventTypeEnum;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
