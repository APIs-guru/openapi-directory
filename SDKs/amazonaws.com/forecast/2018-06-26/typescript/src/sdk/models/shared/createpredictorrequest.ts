import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { Tag } from "./tag";


export class CreatePredictorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @Metadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=EvaluationParameters" })
  evaluationParameters?: EvaluationParameters;

  @Metadata({ data: "json, name=FeaturizationConfig" })
  featurizationConfig: FeaturizationConfig;

  @Metadata({ data: "json, name=ForecastHorizon" })
  forecastHorizon: number;

  @Metadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @Metadata({ data: "json, name=HPOConfig" })
  hpoConfig?: HyperParameterTuningJobConfig;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @Metadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @Metadata({ data: "json, name=PerformAutoML" })
  performAutoMl?: boolean;

  @Metadata({ data: "json, name=PerformHPO" })
  performHpo?: boolean;

  @Metadata({ data: "json, name=PredictorName" })
  predictorName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
