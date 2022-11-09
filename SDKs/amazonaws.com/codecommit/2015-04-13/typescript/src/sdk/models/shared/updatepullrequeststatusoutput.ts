import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequest } from "./pullrequest";


export class UpdatePullRequestStatusOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequest" })
  pullRequest: PullRequest;
}
