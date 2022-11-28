import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MachineLearningDetectionConfig } from "./machinelearningdetectionconfig";
import { StatisticalThreshold } from "./statisticalthreshold";
import { MetricValue } from "./metricvalue";
/**
 * The criteria by which the behavior is determined to be normal.
**/
export declare class BehaviorCriteria extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorEnum;
    consecutiveDatapointsToAlarm?: number;
    consecutiveDatapointsToClear?: number;
    durationSeconds?: number;
    mlDetectionConfig?: MachineLearningDetectionConfig;
    statisticalThreshold?: StatisticalThreshold;
    value?: MetricValue;
}
