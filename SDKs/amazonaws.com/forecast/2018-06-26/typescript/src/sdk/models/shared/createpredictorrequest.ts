import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { Tag } from "./tag";



export class CreatePredictorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=EvaluationParameters" })
  evaluationParameters?: EvaluationParameters;

  @SpeakeasyMetadata({ data: "json, name=FeaturizationConfig" })
  featurizationConfig: FeaturizationConfig;

  @SpeakeasyMetadata({ data: "json, name=ForecastHorizon" })
  forecastHorizon: number;

  @SpeakeasyMetadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=HPOConfig" })
  hpoConfig?: HyperParameterTuningJobConfig;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @SpeakeasyMetadata({ data: "json, name=PerformAutoML" })
  performAutoMl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PerformHPO" })
  performHpo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PredictorName" })
  predictorName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
