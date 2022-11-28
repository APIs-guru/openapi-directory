import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { MetricDimension } from "./metricdimension";
import { StatisticEnum } from "./statisticenum";
import { UnitEnum } from "./unitenum";
/**
 * The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
**/
export declare class CloudWatchAlarmDefinition extends SpeakeasyBase {
    comparisonOperator: ComparisonOperatorEnum;
    dimensions?: MetricDimension[];
    evaluationPeriods?: number;
    metricName: string;
    namespace?: string;
    period: number;
    statistic?: StatisticEnum;
    threshold: number;
    unit?: UnitEnum;
}
