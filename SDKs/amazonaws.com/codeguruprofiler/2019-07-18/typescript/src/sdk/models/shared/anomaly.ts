import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnomalyInstance } from "./anomalyinstance";
import { Metric } from "./metric";


// Anomaly
/** 
 *  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
**/
export class Anomaly extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.AnomalyInstance })
  instances: AnomalyInstance[];

  @Metadata({ data: "json, name=metric" })
  metric: Metric;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}
