import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MetricDimension } from "./metricdimension";
import { StatisticEnum } from "./statisticenum";
import { UnitEnum } from "./unitenum";


// CloudWatchAlarmDefinition
/** 
 * The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
**/
export class CloudWatchAlarmDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=Dimensions", elemType: shared.MetricDimension })
  dimensions?: MetricDimension[];

  @Metadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=Period" })
  period: number;

  @Metadata({ data: "json, name=Statistic" })
  statistic?: StatisticEnum;

  @Metadata({ data: "json, name=Threshold" })
  threshold: number;

  @Metadata({ data: "json, name=Unit" })
  unit?: UnitEnum;
}
