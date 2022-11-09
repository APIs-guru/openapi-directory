import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Comment } from "./comment";
import { Location } from "./location";


export class PostCommentForComparedCommitOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterBlobId" })
  afterBlobId?: string;

  @Metadata({ data: "json, name=afterCommitId" })
  afterCommitId?: string;

  @Metadata({ data: "json, name=beforeBlobId" })
  beforeBlobId?: string;

  @Metadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: Comment;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
