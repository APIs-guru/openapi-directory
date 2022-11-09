import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FleetMetricNameAndArn
/** 
 * The name and ARN of a fleet metric.
**/
export class FleetMetricNameAndArn extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;
}
