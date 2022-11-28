import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePullRequestDescriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
