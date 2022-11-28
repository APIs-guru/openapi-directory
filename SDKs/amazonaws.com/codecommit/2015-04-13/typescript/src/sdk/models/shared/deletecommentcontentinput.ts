import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCommentContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId: string;
}
