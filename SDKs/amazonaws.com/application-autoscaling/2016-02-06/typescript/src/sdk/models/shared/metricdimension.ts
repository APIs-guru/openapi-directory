import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricDimension
/** 
 * Describes the dimension names and values associated with a metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
