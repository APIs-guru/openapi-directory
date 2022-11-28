import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionMemoryMetricNameEnum } from "./lambdafunctionmemorymetricnameenum";
import { LambdaFunctionMemoryMetricStatisticEnum } from "./lambdafunctionmemorymetricstatisticenum";



// LambdaFunctionMemoryProjectedMetric
/** 
 * Describes a projected utilization metric of an Lambda function recommendation option.
**/
export class LambdaFunctionMemoryProjectedMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: LambdaFunctionMemoryMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: LambdaFunctionMemoryMetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
