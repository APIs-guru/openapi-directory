import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionValueFormats } from "./reactionvalueformats";
/**
 * Information about the reaction values provided by users on a comment.
**/
export declare class ReactionForComment extends SpeakeasyBase {
    reaction?: ReactionValueFormats;
    reactionUsers?: string[];
    reactionsFromDeletedUsersCount?: number;
}
