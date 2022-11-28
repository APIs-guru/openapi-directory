import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MetricDimension } from "./metricdimension";
import { StatisticEnum } from "./statisticenum";
import { UnitEnum } from "./unitenum";



// CloudWatchAlarmDefinition
/** 
 * The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
**/
export class CloudWatchAlarmDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: MetricDimension })
  dimensions?: MetricDimension[];

  @SpeakeasyMetadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=Period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=Statistic" })
  statistic?: StatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: UnitEnum;
}
