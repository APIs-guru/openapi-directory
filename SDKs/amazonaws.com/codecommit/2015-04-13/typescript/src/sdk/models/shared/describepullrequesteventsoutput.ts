import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PullRequestEvent } from "./pullrequestevent";


export class DescribePullRequestEventsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pullRequestEvents", elemType: shared.PullRequestEvent })
  pullRequestEvents: PullRequestEvent[];
}
