import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchingResponse
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class MatchingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
