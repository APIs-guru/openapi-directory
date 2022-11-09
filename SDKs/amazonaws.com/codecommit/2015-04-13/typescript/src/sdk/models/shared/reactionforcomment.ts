import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReactionValueFormats } from "./reactionvalueformats";


// ReactionForComment
/** 
 * Information about the reaction values provided by users on a comment.
**/
export class ReactionForComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=reaction" })
  reaction?: ReactionValueFormats;

  @Metadata({ data: "json, name=reactionUsers" })
  reactionUsers?: string[];

  @Metadata({ data: "json, name=reactionsFromDeletedUsersCount" })
  reactionsFromDeletedUsersCount?: number;
}
