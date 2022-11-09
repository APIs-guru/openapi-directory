import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BehaviorCriteria } from "./behaviorcriteria";
import { MetricDimension } from "./metricdimension";


// Behavior
/** 
 * A Device Defender security profile behavior.
**/
export class Behavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteria" })
  criteria?: BehaviorCriteria;

  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=metricDimension" })
  metricDimension?: MetricDimension;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=suppressAlerts" })
  suppressAlerts?: boolean;
}
