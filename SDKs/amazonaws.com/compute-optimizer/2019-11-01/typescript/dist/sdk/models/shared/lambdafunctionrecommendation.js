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
import { LambdaFunctionRecommendationFindingEnum } from "./lambdafunctionrecommendationfindingenum";
import { LambdaFunctionMemoryRecommendationOption } from "./lambdafunctionmemoryrecommendationoption";
import { LambdaFunctionUtilizationMetric } from "./lambdafunctionutilizationmetric";
// LambdaFunctionRecommendation
/**
 * Describes an Lambda function recommendation.
**/
var LambdaFunctionRecommendation = /** @class */ (function (_super) {
    __extends(LambdaFunctionRecommendation, _super);
    function LambdaFunctionRecommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], LambdaFunctionRecommendation.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentMemorySize" }),
        __metadata("design:type", Number)
    ], LambdaFunctionRecommendation.prototype, "currentMemorySize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finding" }),
        __metadata("design:type", String)
    ], LambdaFunctionRecommendation.prototype, "finding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingReasonCodes" }),
        __metadata("design:type", Array)
    ], LambdaFunctionRecommendation.prototype, "findingReasonCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionArn" }),
        __metadata("design:type", String)
    ], LambdaFunctionRecommendation.prototype, "functionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionVersion" }),
        __metadata("design:type", String)
    ], LambdaFunctionRecommendation.prototype, "functionVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRefreshTimestamp" }),
        __metadata("design:type", Date)
    ], LambdaFunctionRecommendation.prototype, "lastRefreshTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookbackPeriodInDays" }),
        __metadata("design:type", Number)
    ], LambdaFunctionRecommendation.prototype, "lookbackPeriodInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memorySizeRecommendationOptions", elemType: LambdaFunctionMemoryRecommendationOption }),
        __metadata("design:type", Array)
    ], LambdaFunctionRecommendation.prototype, "memorySizeRecommendationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfInvocations" }),
        __metadata("design:type", Number)
    ], LambdaFunctionRecommendation.prototype, "numberOfInvocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utilizationMetrics", elemType: LambdaFunctionUtilizationMetric }),
        __metadata("design:type", Array)
    ], LambdaFunctionRecommendation.prototype, "utilizationMetrics", void 0);
    return LambdaFunctionRecommendation;
}(SpeakeasyBase));
export { LambdaFunctionRecommendation };
