import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorCriteria } from "./behaviorcriteria";
import { MetricDimension } from "./metricdimension";



// Behavior
/** 
 * A Device Defender security profile behavior.
**/
export class Behavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteria" })
  criteria?: BehaviorCriteria;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=metricDimension" })
  metricDimension?: MetricDimension;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=suppressAlerts" })
  suppressAlerts?: boolean;
}
