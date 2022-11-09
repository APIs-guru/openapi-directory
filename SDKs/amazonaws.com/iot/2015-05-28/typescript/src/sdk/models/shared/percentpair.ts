import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PercentPair
/** 
 * Describes the percentile and percentile value.
**/
export class PercentPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=percent" })
  percent?: number;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
