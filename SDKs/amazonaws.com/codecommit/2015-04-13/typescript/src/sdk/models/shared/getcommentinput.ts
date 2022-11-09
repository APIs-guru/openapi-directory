import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentId" })
  commentId: string;
}
