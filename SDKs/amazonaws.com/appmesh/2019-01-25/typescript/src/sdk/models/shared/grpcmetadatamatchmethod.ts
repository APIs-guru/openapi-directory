import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchRange } from "./matchrange";


// GrpcMetadataMatchMethod
/** 
 * An object representing the method header to be matched.
**/
export class GrpcMetadataMatchMethod extends SpeakeasyBase {
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
