import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionMetricNameEnum } from "./lambdafunctionmetricnameenum";
import { LambdaFunctionMetricStatisticEnum } from "./lambdafunctionmetricstatisticenum";


// LambdaFunctionUtilizationMetric
/** 
 * Describes a utilization metric of an Lambda function.
**/
export class LambdaFunctionUtilizationMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: LambdaFunctionMetricNameEnum;

  @Metadata({ data: "json, name=statistic" })
  statistic?: LambdaFunctionMetricStatisticEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
