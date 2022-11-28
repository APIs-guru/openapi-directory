import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutCommentReactionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId: string;

  @SpeakeasyMetadata({ data: "json, name=reactionValue" })
  reactionValue: string;
}
