import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { PredictorExecutionDetails } from "./predictorexecutiondetails";


export class DescribePredictorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=AutoMLAlgorithmArns" })
  autoMlAlgorithmArns?: string[];

  @Metadata({ data: "json, name=AutoMLOverrideStrategy" })
  autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetImportJobArns" })
  datasetImportJobArns?: string[];

  @Metadata({ data: "json, name=EncryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @Metadata({ data: "json, name=EvaluationParameters" })
  evaluationParameters?: EvaluationParameters;

  @Metadata({ data: "json, name=FeaturizationConfig" })
  featurizationConfig?: FeaturizationConfig;

  @Metadata({ data: "json, name=ForecastHorizon" })
  forecastHorizon?: number;

  @Metadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @Metadata({ data: "json, name=HPOConfig" })
  hpoConfig?: HyperParameterTuningJobConfig;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OptimizationMetric" })
  optimizationMetric?: OptimizationMetricEnum;

  @Metadata({ data: "json, name=PerformAutoML" })
  performAutoMl?: boolean;

  @Metadata({ data: "json, name=PerformHPO" })
  performHpo?: boolean;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @Metadata({ data: "json, name=PredictorExecutionDetails" })
  predictorExecutionDetails?: PredictorExecutionDetails;

  @Metadata({ data: "json, name=PredictorName" })
  predictorName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
