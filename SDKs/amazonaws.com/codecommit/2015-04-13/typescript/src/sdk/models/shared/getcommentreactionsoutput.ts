import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReactionForComment } from "./reactionforcomment";



export class GetCommentReactionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reactionsForComment", elemType: ReactionForComment })
  reactionsForComment: ReactionForComment[];
}
