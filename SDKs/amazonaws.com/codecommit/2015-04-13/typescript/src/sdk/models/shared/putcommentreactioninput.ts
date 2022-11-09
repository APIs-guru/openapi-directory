import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutCommentReactionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentId" })
  commentId: string;

  @Metadata({ data: "json, name=reactionValue" })
  reactionValue: string;
}
