import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FleetMetricNameAndArn
/** 
 * The name and ARN of a fleet metric.
**/
export class FleetMetricNameAndArn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;
}
