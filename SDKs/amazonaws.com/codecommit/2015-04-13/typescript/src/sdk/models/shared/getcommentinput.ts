import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCommentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId: string;
}
