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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlOverrideStrategyEnum } from "./automloverridestrategyenum";
import { EncryptionConfig } from "./encryptionconfig";
import { EvaluationParameters } from "./evaluationparameters";
import { FeaturizationConfig } from "./featurizationconfig";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OptimizationMetricEnum } from "./optimizationmetricenum";
import { Tag } from "./tag";
var CreatePredictorRequest = /** @class */ (function (_super) {
    __extends(CreatePredictorRequest, _super);
    function CreatePredictorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmArn" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "algorithmArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLOverrideStrategy" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "autoMlOverrideStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], CreatePredictorRequest.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationParameters" }),
        __metadata("design:type", EvaluationParameters)
    ], CreatePredictorRequest.prototype, "evaluationParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeaturizationConfig" }),
        __metadata("design:type", FeaturizationConfig)
    ], CreatePredictorRequest.prototype, "featurizationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastHorizon" }),
        __metadata("design:type", Number)
    ], CreatePredictorRequest.prototype, "forecastHorizon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastTypes" }),
        __metadata("design:type", Array)
    ], CreatePredictorRequest.prototype, "forecastTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HPOConfig" }),
        __metadata("design:type", HyperParameterTuningJobConfig)
    ], CreatePredictorRequest.prototype, "hpoConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", InputDataConfig)
    ], CreatePredictorRequest.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptimizationMetric" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "optimizationMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformAutoML" }),
        __metadata("design:type", Boolean)
    ], CreatePredictorRequest.prototype, "performAutoMl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformHPO" }),
        __metadata("design:type", Boolean)
    ], CreatePredictorRequest.prototype, "performHpo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictorName" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "predictorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreatePredictorRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingParameters" }),
        __metadata("design:type", Map)
    ], CreatePredictorRequest.prototype, "trainingParameters", void 0);
    return CreatePredictorRequest;
}(SpeakeasyBase));
export { CreatePredictorRequest };
