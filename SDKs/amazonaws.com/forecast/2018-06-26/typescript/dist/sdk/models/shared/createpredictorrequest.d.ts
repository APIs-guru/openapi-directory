import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { Tag } from "./tag";
export declare class CreatePredictorRequest extends SpeakeasyBase {
    algorithmArn?: string;
    autoMlOverrideStrategy?: AutoMlOverrideStrategyEnum;
    encryptionConfig?: EncryptionConfig;
    evaluationParameters?: EvaluationParameters;
    featurizationConfig: FeaturizationConfig;
    forecastHorizon: number;
    forecastTypes?: string[];
    hpoConfig?: HyperParameterTuningJobConfig;
    inputDataConfig: InputDataConfig;
    optimizationMetric?: OptimizationMetricEnum;
    performAutoMl?: boolean;
    performHpo?: boolean;
    predictorName: string;
    tags?: Tag[];
    trainingParameters?: Map<string, string>;
}
