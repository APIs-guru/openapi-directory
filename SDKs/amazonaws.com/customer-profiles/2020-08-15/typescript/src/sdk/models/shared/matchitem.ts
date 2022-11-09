import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MatchItem
/** 
 * The Match group object.
**/
export class MatchItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=MatchId" })
  matchId?: string;

  @Metadata({ data: "json, name=ProfileIds" })
  profileIds?: string[];
}
