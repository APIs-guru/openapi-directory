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
import * as shared from "../shared";
// Metrics
/**
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
**/
var Metrics = /** @class */ (function (_super) {
    __extends(Metrics, _super);
    function Metrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AverageWeightedQuantileLoss" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "averageWeightedQuantileLoss", void 0);
    __decorate([
        Metadata({ data: "json, name=ErrorMetrics", elemType: shared.ErrorMetric }),
        __metadata("design:type", Array)
    ], Metrics.prototype, "errorMetrics", void 0);
    __decorate([
        Metadata({ data: "json, name=RMSE" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "rmse", void 0);
    __decorate([
        Metadata({ data: "json, name=WeightedQuantileLosses", elemType: shared.WeightedQuantileLoss }),
        __metadata("design:type", Array)
    ], Metrics.prototype, "weightedQuantileLosses", void 0);
    return Metrics;
}(SpeakeasyBase));
export { Metrics };
