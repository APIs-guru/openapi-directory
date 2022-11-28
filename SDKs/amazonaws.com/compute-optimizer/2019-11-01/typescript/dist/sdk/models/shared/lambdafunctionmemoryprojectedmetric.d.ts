import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionMemoryMetricNameEnum } from "./lambdafunctionmemorymetricnameenum";
import { LambdaFunctionMemoryMetricStatisticEnum } from "./lambdafunctionmemorymetricstatisticenum";
/**
 * Describes a projected utilization metric of an Lambda function recommendation option.
**/
export declare class LambdaFunctionMemoryProjectedMetric extends SpeakeasyBase {
    name?: LambdaFunctionMemoryMetricNameEnum;
    statistic?: LambdaFunctionMemoryMetricStatisticEnum;
    value?: number;
}
