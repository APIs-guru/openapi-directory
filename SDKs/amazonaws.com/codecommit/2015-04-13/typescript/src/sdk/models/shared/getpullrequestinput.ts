import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPullRequestInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
