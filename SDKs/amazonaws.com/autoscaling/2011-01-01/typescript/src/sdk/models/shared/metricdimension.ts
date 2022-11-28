import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricDimension
/** 
 * Describes the dimension of a metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  value: string;
}
