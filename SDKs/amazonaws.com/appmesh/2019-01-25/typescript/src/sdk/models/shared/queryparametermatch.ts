import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryParameterMatch
/** 
 * An object representing the query parameter to match.
**/
export class QueryParameterMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;
}
