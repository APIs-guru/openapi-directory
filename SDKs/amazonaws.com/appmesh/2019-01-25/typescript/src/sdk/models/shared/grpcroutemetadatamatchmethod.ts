import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchRange } from "./matchrange";


// GrpcRouteMetadataMatchMethod
/** 
 * An object that represents the match method. Specify one of the match values.
**/
export class GrpcRouteMetadataMatchMethod extends SpeakeasyBase {
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
