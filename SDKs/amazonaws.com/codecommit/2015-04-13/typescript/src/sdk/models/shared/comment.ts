import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Comment
/** 
 * Returns information about a specific comment.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @Metadata({ data: "json, name=callerReactions" })
  callerReactions?: string[];

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=commentId" })
  commentId?: string;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=inReplyTo" })
  inReplyTo?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=reactionCounts" })
  reactionCounts?: Map<string, number>;
}
