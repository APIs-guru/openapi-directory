import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPullRequestsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestIds" })
  pullRequestIds: string[];
}
