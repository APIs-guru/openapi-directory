import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";



// HeaderMatchMethod
/** 
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
**/
export class HeaderMatchMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: MatchRange;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}
