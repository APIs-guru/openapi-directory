import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePullRequestDescriptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
