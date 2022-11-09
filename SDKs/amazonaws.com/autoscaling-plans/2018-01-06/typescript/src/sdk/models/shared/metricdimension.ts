import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricDimension
/** 
 * Represents a dimension for a customized metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
