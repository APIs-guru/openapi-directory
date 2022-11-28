import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MachineLearningDetectionConfig } from "./machinelearningdetectionconfig";
import { StatisticalThreshold } from "./statisticalthreshold";
import { MetricValue } from "./metricvalue";



// BehaviorCriteria
/** 
 * The criteria by which the behavior is determined to be normal.
**/
export class BehaviorCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=consecutiveDatapointsToAlarm" })
  consecutiveDatapointsToAlarm?: number;

  @SpeakeasyMetadata({ data: "json, name=consecutiveDatapointsToClear" })
  consecutiveDatapointsToClear?: number;

  @SpeakeasyMetadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=mlDetectionConfig" })
  mlDetectionConfig?: MachineLearningDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=statisticalThreshold" })
  statisticalThreshold?: StatisticalThreshold;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: MetricValue;
}
