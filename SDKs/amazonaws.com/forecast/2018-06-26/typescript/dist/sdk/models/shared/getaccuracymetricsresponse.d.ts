import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { EvaluationResult } from "./evaluationresult";
export declare class GetAccuracyMetricsResponse extends SpeakeasyBase {
    autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;
    optimizationMetric?: OptimizationMetricEnum;
    predictorEvaluationResults?: EvaluationResult[];
}
