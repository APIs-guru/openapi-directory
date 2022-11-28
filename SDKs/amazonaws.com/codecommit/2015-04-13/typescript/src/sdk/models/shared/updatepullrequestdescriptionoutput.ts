import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequest } from "./pullrequest";



export class UpdatePullRequestDescriptionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest: PullRequest;
}
