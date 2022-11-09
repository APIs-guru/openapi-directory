import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePullRequestTitleInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
