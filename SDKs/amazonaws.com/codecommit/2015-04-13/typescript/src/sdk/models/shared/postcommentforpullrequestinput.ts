import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



export class PostCommentForPullRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterCommitId" })
  afterCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=beforeCommitId" })
  beforeCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
