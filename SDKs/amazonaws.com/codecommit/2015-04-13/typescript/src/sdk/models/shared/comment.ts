import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Comment
/** 
 * Returns information about a specific comment.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorArn" })
  authorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=callerReactions" })
  callerReactions?: string[];

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inReplyTo" })
  inReplyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reactionCounts" })
  reactionCounts?: Map<string, number>;
}
