import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReactionValueFormats
/** 
 * Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.
**/
export class ReactionValueFormats extends SpeakeasyBase {
  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=shortCode" })
  shortCode?: string;

  @Metadata({ data: "json, name=unicode" })
  unicode?: string;
}
