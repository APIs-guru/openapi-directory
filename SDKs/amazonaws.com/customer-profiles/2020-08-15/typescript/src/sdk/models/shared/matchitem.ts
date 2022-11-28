import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchItem
/** 
 * The Match group object.
**/
export class MatchItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MatchId" })
  matchId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileIds" })
  profileIds?: string[];
}
