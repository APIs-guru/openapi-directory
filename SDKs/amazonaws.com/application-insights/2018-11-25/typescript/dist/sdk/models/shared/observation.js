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
import { CloudWatchEventSourceEnum } from "./cloudwatcheventsourceenum";
import { LogFilterEnum } from "./logfilterenum";
// Observation
/**
 * Describes an anomaly or error with the application.
**/
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    function Observation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchEventDetailType" }),
        __metadata("design:type", String)
    ], Observation.prototype, "cloudWatchEventDetailType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchEventId" }),
        __metadata("design:type", String)
    ], Observation.prototype, "cloudWatchEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchEventSource" }),
        __metadata("design:type", String)
    ], Observation.prototype, "cloudWatchEventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeDeployApplication" }),
        __metadata("design:type", String)
    ], Observation.prototype, "codeDeployApplication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeDeployDeploymentGroup" }),
        __metadata("design:type", String)
    ], Observation.prototype, "codeDeployDeploymentGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeDeployDeploymentId" }),
        __metadata("design:type", String)
    ], Observation.prototype, "codeDeployDeploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeDeployInstanceGroupId" }),
        __metadata("design:type", String)
    ], Observation.prototype, "codeDeployInstanceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeDeployState" }),
        __metadata("design:type", String)
    ], Observation.prototype, "codeDeployState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsCause" }),
        __metadata("design:type", String)
    ], Observation.prototype, "ebsCause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsEvent" }),
        __metadata("design:type", String)
    ], Observation.prototype, "ebsEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsRequestId" }),
        __metadata("design:type", String)
    ], Observation.prototype, "ebsRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsResult" }),
        __metadata("design:type", String)
    ], Observation.prototype, "ebsResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2State" }),
        __metadata("design:type", String)
    ], Observation.prototype, "ec2State", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], Observation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthEventArn" }),
        __metadata("design:type", String)
    ], Observation.prototype, "healthEventArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthEventDescription" }),
        __metadata("design:type", String)
    ], Observation.prototype, "healthEventDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthEventTypeCategory" }),
        __metadata("design:type", String)
    ], Observation.prototype, "healthEventTypeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthEventTypeCode" }),
        __metadata("design:type", String)
    ], Observation.prototype, "healthEventTypeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthService" }),
        __metadata("design:type", String)
    ], Observation.prototype, "healthService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Observation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LineTime" }),
        __metadata("design:type", Date)
    ], Observation.prototype, "lineTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogFilter" }),
        __metadata("design:type", String)
    ], Observation.prototype, "logFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogGroup" }),
        __metadata("design:type", String)
    ], Observation.prototype, "logGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogText" }),
        __metadata("design:type", String)
    ], Observation.prototype, "logText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], Observation.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricNamespace" }),
        __metadata("design:type", String)
    ], Observation.prototype, "metricNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RdsEventCategories" }),
        __metadata("design:type", String)
    ], Observation.prototype, "rdsEventCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RdsEventMessage" }),
        __metadata("design:type", String)
    ], Observation.prototype, "rdsEventMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3EventName" }),
        __metadata("design:type", String)
    ], Observation.prototype, "s3EventName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceARN" }),
        __metadata("design:type", String)
    ], Observation.prototype, "sourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], Observation.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], Observation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatesArn" }),
        __metadata("design:type", String)
    ], Observation.prototype, "statesArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatesExecutionArn" }),
        __metadata("design:type", String)
    ], Observation.prototype, "statesExecutionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatesInput" }),
        __metadata("design:type", String)
    ], Observation.prototype, "statesInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatesStatus" }),
        __metadata("design:type", String)
    ], Observation.prototype, "statesStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], Observation.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayErrorPercent" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "xRayErrorPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayFaultPercent" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "xRayFaultPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayNodeName" }),
        __metadata("design:type", String)
    ], Observation.prototype, "xRayNodeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayNodeType" }),
        __metadata("design:type", String)
    ], Observation.prototype, "xRayNodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayRequestAverageLatency" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "xRayRequestAverageLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayRequestCount" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "xRayRequestCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XRayThrottlePercent" }),
        __metadata("design:type", Number)
    ], Observation.prototype, "xRayThrottlePercent", void 0);
    return Observation;
}(SpeakeasyBase));
export { Observation };
