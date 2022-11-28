import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";



// GrpcRouteMetadataMatchMethod
/** 
 * An object that represents the match method. Specify one of the match values.
**/
export class GrpcRouteMetadataMatchMethod extends SpeakeasyBase {
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
