import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";



// GrpcMetadataMatchMethod
/** 
 * An object representing the method header to be matched.
**/
export class GrpcMetadataMatchMethod extends SpeakeasyBase {
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
