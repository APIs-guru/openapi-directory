import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchRange } from "./matchrange";


// HeaderMatchMethod
/** 
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
**/
export class HeaderMatchMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=range" })
  range?: MatchRange;

  @Metadata({ data: "json, name=regex" })
  regex?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;
}
