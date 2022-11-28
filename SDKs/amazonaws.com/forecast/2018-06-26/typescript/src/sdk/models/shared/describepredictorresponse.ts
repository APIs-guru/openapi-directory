import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { PredictorExecutionDetails } from "./predictorexecutiondetails";



export class DescribePredictorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLAlgorithmArns" })
  autoMlAlgorithmArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArns" })
  datasetImportJobArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=EvaluationParameters" })
  evaluationParameters?: EvaluationParameters;

  @SpeakeasyMetadata({ data: "json, name=FeaturizationConfig" })
  featurizationConfig?: FeaturizationConfig;

  @SpeakeasyMetadata({ data: "json, name=ForecastHorizon" })
  forecastHorizon?: number;

  @SpeakeasyMetadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=HPOConfig" })
  hpoConfig?: HyperParameterTuningJobConfig;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @SpeakeasyMetadata({ data: "json, name=PerformAutoML" })
  performAutoMl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PerformHPO" })
  performHpo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorExecutionDetails" })
  predictorExecutionDetails?: PredictorExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=PredictorName" })
  predictorName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
