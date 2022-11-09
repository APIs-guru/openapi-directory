import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MachineLearningDetectionConfig } from "./machinelearningdetectionconfig";
import { StatisticalThreshold } from "./statisticalthreshold";
import { MetricValue } from "./metricvalue";


// BehaviorCriteria
/** 
 * The criteria by which the behavior is determined to be normal.
**/
export class BehaviorCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=consecutiveDatapointsToAlarm" })
  consecutiveDatapointsToAlarm?: number;

  @Metadata({ data: "json, name=consecutiveDatapointsToClear" })
  consecutiveDatapointsToClear?: number;

  @Metadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=mlDetectionConfig" })
  mlDetectionConfig?: MachineLearningDetectionConfig;

  @Metadata({ data: "json, name=statisticalThreshold" })
  statisticalThreshold?: StatisticalThreshold;

  @Metadata({ data: "json, name=value" })
  value?: MetricValue;
}
