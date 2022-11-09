import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionMetricNameEnum } from "./lambdafunctionmetricnameenum";
import { LambdaFunctionMetricStatisticEnum } from "./lambdafunctionmetricstatisticenum";
/**
 * Describes a utilization metric of an Lambda function.
**/
export declare class LambdaFunctionUtilizationMetric extends SpeakeasyBase {
    name?: LambdaFunctionMetricNameEnum;
    statistic?: LambdaFunctionMetricStatisticEnum;
    value?: number;
}
