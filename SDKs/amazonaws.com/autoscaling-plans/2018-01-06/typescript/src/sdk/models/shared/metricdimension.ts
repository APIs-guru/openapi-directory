import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricDimension
/** 
 * Represents a dimension for a customized metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
