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
// ProactiveAnomaly
/**
 * Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
**/
var ProactiveAnomaly = /** @class */ (function (_super) {
    __extends(ProactiveAnomaly, _super);
    function ProactiveAnomaly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyReportedTimeRange" }),
        __metadata("design:type", AnomalyReportedTimeRange)
    ], ProactiveAnomaly.prototype, "anomalyReportedTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyTimeRange" }),
        __metadata("design:type", AnomalyTimeRange)
    ], ProactiveAnomaly.prototype, "anomalyTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociatedInsightId" }),
        __metadata("design:type", String)
    ], ProactiveAnomaly.prototype, "associatedInsightId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProactiveAnomaly.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limit" }),
        __metadata("design:type", Number)
    ], ProactiveAnomaly.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictionTimeRange" }),
        __metadata("design:type", PredictionTimeRange)
    ], ProactiveAnomaly.prototype, "predictionTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", ResourceCollection)
    ], ProactiveAnomaly.prototype, "resourceCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], ProactiveAnomaly.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDetails" }),
        __metadata("design:type", AnomalySourceDetails)
    ], ProactiveAnomaly.prototype, "sourceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProactiveAnomaly.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateTime" }),
        __metadata("design:type", Date)
    ], ProactiveAnomaly.prototype, "updateTime", void 0);
    return ProactiveAnomaly;
}(SpeakeasyBase));
export { ProactiveAnomaly };
