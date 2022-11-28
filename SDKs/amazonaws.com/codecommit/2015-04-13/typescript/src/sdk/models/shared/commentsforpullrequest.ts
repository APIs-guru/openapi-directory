import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Location } from "./location";



// CommentsForPullRequest
/** 
 * Returns information about comments on a pull request.
**/
export class CommentsForPullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterBlobId" })
  afterBlobId?: string;

  @SpeakeasyMetadata({ data: "json, name=afterCommitId" })
  afterCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeBlobId" })
  beforeBlobId?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
