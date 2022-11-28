import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricGranularityType
/** 
 * Describes a granularity of a metric.
**/
export class MetricGranularityType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  granularity?: string;
}
