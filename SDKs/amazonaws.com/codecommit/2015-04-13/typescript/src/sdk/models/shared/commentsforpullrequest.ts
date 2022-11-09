import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";
import { Location } from "./location";


// CommentsForPullRequest
/** 
 * Returns information about comments on a pull request.
**/
export class CommentsForPullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterBlobId" })
  afterBlobId?: string;

  @Metadata({ data: "json, name=afterCommitId" })
  afterCommitId?: string;

  @Metadata({ data: "json, name=beforeBlobId" })
  beforeBlobId?: string;

  @Metadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
