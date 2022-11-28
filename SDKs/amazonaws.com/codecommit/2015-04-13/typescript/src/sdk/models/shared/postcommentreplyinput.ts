import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCommentReplyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=inReplyTo" })
  inReplyTo: string;
}
