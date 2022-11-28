import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReactionValueFormats
/** 
 * Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.
**/
export class ReactionValueFormats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=shortCode" })
  shortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=unicode" })
  unicode?: string;
}
