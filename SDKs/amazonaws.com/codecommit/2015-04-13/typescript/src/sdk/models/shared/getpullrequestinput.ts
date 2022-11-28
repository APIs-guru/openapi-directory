import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPullRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
