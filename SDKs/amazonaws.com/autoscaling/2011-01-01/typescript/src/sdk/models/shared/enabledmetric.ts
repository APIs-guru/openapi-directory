import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnabledMetric
/** 
 * Describes an enabled metric.
**/
export class EnabledMetric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  granularity?: string;

  @SpeakeasyMetadata()
  metric?: string;
}
