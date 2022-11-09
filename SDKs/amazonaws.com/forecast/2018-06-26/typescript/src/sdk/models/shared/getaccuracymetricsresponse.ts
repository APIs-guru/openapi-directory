import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { EvaluationResult } from "./evaluationresult";


export class GetAccuracyMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @Metadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @Metadata({ data: "json, name=PredictorEvaluationResults", elemType: shared.EvaluationResult })
  predictorEvaluationResults?: EvaluationResult[];
}
