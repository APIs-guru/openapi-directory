import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Comment } from "./comment";


export class PostCommentReplyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: Comment;
}
