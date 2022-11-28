import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCommentReactionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reactionUserArn" })
  reactionUserArn?: string;
}
