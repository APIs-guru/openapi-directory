import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionMemoryMetricNameEnum } from "./lambdafunctionmemorymetricnameenum";
import { LambdaFunctionMemoryMetricStatisticEnum } from "./lambdafunctionmemorymetricstatisticenum";


// LambdaFunctionMemoryProjectedMetric
/** 
 * Describes a projected utilization metric of an Lambda function recommendation option.
**/
export class LambdaFunctionMemoryProjectedMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: LambdaFunctionMemoryMetricNameEnum;

  @Metadata({ data: "json, name=statistic" })
  statistic?: LambdaFunctionMemoryMetricStatisticEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
