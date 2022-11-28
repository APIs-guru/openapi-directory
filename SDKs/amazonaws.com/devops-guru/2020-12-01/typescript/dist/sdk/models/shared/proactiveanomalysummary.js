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
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";
// ProactiveAnomalySummary
/**
 * Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code>
**/
var ProactiveAnomalySummary = /** @class */ (function (_super) {
    __extends(ProactiveAnomalySummary, _super);
    function ProactiveAnomalySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyReportedTimeRange" }),
        __metadata("design:type", AnomalyReportedTimeRange)
    ], ProactiveAnomalySummary.prototype, "anomalyReportedTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyTimeRange" }),
        __metadata("design:type", AnomalyTimeRange)
    ], ProactiveAnomalySummary.prototype, "anomalyTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociatedInsightId" }),
        __metadata("design:type", String)
    ], ProactiveAnomalySummary.prototype, "associatedInsightId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProactiveAnomalySummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limit" }),
        __metadata("design:type", Number)
    ], ProactiveAnomalySummary.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictionTimeRange" }),
        __metadata("design:type", PredictionTimeRange)
    ], ProactiveAnomalySummary.prototype, "predictionTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", ResourceCollection)
    ], ProactiveAnomalySummary.prototype, "resourceCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], ProactiveAnomalySummary.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDetails" }),
        __metadata("design:type", AnomalySourceDetails)
    ], ProactiveAnomalySummary.prototype, "sourceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProactiveAnomalySummary.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTime" }),
        __metadata("design:type", Date)
    ], ProactiveAnomalySummary.prototype, "updateTime", void 0);
    return ProactiveAnomalySummary;
}(SpeakeasyBase));
export { ProactiveAnomalySummary };
