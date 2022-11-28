import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePullRequestTitleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
