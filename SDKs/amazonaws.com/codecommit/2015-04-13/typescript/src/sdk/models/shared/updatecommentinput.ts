import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCommentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;
}
