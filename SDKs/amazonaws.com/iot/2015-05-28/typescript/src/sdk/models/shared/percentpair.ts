import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PercentPair
/** 
 * Describes the percentile and percentile value.
**/
export class PercentPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
