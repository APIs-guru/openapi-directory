import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionMetricNameEnum } from "./lambdafunctionmetricnameenum";
import { LambdaFunctionMetricStatisticEnum } from "./lambdafunctionmetricstatisticenum";



// LambdaFunctionUtilizationMetric
/** 
 * Describes a utilization metric of an Lambda function.
**/
export class LambdaFunctionUtilizationMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: LambdaFunctionMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: LambdaFunctionMetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
