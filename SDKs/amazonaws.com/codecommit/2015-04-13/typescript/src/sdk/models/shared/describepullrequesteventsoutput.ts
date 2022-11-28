import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestEvent } from "./pullrequestevent";



export class DescribePullRequestEventsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestEvents", elemType: PullRequestEvent })
  pullRequestEvents: PullRequestEvent[];
}
