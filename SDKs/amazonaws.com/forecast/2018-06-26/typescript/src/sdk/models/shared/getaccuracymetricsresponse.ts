import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { EvaluationResult } from "./evaluationresult";



export class GetAccuracyMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @SpeakeasyMetadata({ data: "json, name=PredictorEvaluationResults", elemType: EvaluationResult })
  predictorEvaluationResults?: EvaluationResult[];
}
