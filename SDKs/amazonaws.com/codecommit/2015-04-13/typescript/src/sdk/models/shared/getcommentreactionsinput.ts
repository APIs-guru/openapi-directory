import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommentReactionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentId" })
  commentId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reactionUserArn" })
  reactionUserArn?: string;
}
