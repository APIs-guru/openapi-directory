import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCommentReplyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=inReplyTo" })
  inReplyTo: string;
}
