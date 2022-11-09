import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpPathMatch
/** 
 * An object representing the path to match in the request.
**/
export class HttpPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}
