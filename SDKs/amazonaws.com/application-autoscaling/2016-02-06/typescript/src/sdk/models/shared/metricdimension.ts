import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricDimension
/** 
 * Describes the dimension names and values associated with a metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
