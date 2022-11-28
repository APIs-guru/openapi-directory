import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReactionValueFormats } from "./reactionvalueformats";



// ReactionForComment
/** 
 * Information about the reaction values provided by users on a comment.
**/
export class ReactionForComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reaction" })
  reaction?: ReactionValueFormats;

  @SpeakeasyMetadata({ data: "json, name=reactionUsers" })
  reactionUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=reactionsFromDeletedUsersCount" })
  reactionsFromDeletedUsersCount?: number;
}
