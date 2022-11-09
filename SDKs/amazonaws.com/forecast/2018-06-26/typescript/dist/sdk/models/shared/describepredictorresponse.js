var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { PredictorExecutionDetails } from "./predictorexecutiondetails";
var DescribePredictorResponse = /** @class */ (function (_super) {
    __extends(DescribePredictorResponse, _super);
    function DescribePredictorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AlgorithmArn" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "algorithmArn", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoMLAlgorithmArns" }),
        __metadata("design:type", Array)
    ], DescribePredictorResponse.prototype, "autoMlAlgorithmArns", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoMLOverrideStrategy" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "autoMlOverrideStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribePredictorResponse.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=DatasetImportJobArns" }),
        __metadata("design:type", Array)
    ], DescribePredictorResponse.prototype, "datasetImportJobArns", void 0);
    __decorate([
        Metadata({ data: "json, name=EncryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], DescribePredictorResponse.prototype, "encryptionConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=EstimatedTimeRemainingInMinutes" }),
        __metadata("design:type", Number)
    ], DescribePredictorResponse.prototype, "estimatedTimeRemainingInMinutes", void 0);
    __decorate([
        Metadata({ data: "json, name=EvaluationParameters" }),
        __metadata("design:type", EvaluationParameters)
    ], DescribePredictorResponse.prototype, "evaluationParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=FeaturizationConfig" }),
        __metadata("design:type", FeaturizationConfig)
    ], DescribePredictorResponse.prototype, "featurizationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=ForecastHorizon" }),
        __metadata("design:type", Number)
    ], DescribePredictorResponse.prototype, "forecastHorizon", void 0);
    __decorate([
        Metadata({ data: "json, name=ForecastTypes" }),
        __metadata("design:type", Array)
    ], DescribePredictorResponse.prototype, "forecastTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=HPOConfig" }),
        __metadata("design:type", HyperParameterTuningJobConfig)
    ], DescribePredictorResponse.prototype, "hpoConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", InputDataConfig)
    ], DescribePredictorResponse.prototype, "inputDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModificationTime" }),
        __metadata("design:type", Date)
    ], DescribePredictorResponse.prototype, "lastModificationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=OptimizationMetric" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "optimizationMetric", void 0);
    __decorate([
        Metadata({ data: "json, name=PerformAutoML" }),
        __metadata("design:type", Boolean)
    ], DescribePredictorResponse.prototype, "performAutoMl", void 0);
    __decorate([
        Metadata({ data: "json, name=PerformHPO" }),
        __metadata("design:type", Boolean)
    ], DescribePredictorResponse.prototype, "performHpo", void 0);
    __decorate([
        Metadata({ data: "json, name=PredictorArn" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "predictorArn", void 0);
    __decorate([
        Metadata({ data: "json, name=PredictorExecutionDetails" }),
        __metadata("design:type", PredictorExecutionDetails)
    ], DescribePredictorResponse.prototype, "predictorExecutionDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=PredictorName" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "predictorName", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribePredictorResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=TrainingParameters" }),
        __metadata("design:type", Map)
    ], DescribePredictorResponse.prototype, "trainingParameters", void 0);
    return DescribePredictorResponse;
}(SpeakeasyBase));
export { DescribePredictorResponse };
