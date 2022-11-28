import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricCollectionType
/** 
 * Describes a metric.
**/
export class MetricCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  metric?: string;
}
