import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReactionForComment } from "./reactionforcomment";


export class GetCommentReactionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reactionsForComment", elemType: shared.ReactionForComment })
  reactionsForComment: ReactionForComment[];
}
