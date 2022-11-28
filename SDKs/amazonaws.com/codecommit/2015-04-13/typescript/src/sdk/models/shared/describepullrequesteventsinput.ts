import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestEventTypeEnum } from "./pullrequesteventtypeenum";



export class DescribePullRequestEventsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actorArn" })
  actorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestEventType" })
  pullRequestEventType?: PullRequestEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
