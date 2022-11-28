import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionForComment } from "./reactionforcomment";
export declare class GetCommentReactionsOutput extends SpeakeasyBase {
    nextToken?: string;
    reactionsForComment: ReactionForComment[];
}
