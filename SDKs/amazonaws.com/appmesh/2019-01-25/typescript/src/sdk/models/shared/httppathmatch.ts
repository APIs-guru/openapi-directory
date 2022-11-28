import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpPathMatch
/** 
 * An object representing the path to match in the request.
**/
export class HttpPathMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}
