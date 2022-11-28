import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyInstance } from "./anomalyinstance";
import { Metric } from "./metric";



// Anomaly
/** 
 *  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
**/
export class Anomaly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: AnomalyInstance })
  instances: AnomalyInstance[];

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: Metric;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}
