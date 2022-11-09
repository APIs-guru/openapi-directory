import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MatchingResponse
/** 
 * The flag that enables the matching process of duplicate profiles.
**/
export class MatchingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
