import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryParameterMatch
/** 
 * An object representing the query parameter to match.
**/
export class QueryParameterMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;
}
