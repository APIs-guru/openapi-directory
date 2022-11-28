import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



export class DeleteCommentContentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: Comment;
}
