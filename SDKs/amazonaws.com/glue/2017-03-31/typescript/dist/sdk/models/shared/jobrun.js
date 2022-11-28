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
import { JobRunStateEnum } from "./jobrunstateenum";
import { NotificationProperty } from "./notificationproperty";
import { Predecessor } from "./predecessor";
import { WorkerTypeEnum } from "./workertypeenum";
// JobRun
/**
 * Contains information about a job run.
**/
var JobRun = /** @class */ (function (_super) {
    __extends(JobRun, _super);
    function JobRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedCapacity" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "allocatedCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arguments" }),
        __metadata("design:type", Map)
    ], JobRun.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attempt" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "attempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedOn" }),
        __metadata("design:type", Date)
    ], JobRun.prototype, "completedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorMessage" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionTime" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "executionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlueVersion" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "glueVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobName" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "jobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunState" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "jobRunState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedOn" }),
        __metadata("design:type", Date)
    ], JobRun.prototype, "lastModifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogGroupName" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "logGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCapacity" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationProperty" }),
        __metadata("design:type", NotificationProperty)
    ], JobRun.prototype, "notificationProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "numberOfWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredecessorRuns", elemType: Predecessor }),
        __metadata("design:type", Array)
    ], JobRun.prototype, "predecessorRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousRunId" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "previousRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "securityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedOn" }),
        __metadata("design:type", Date)
    ], JobRun.prototype, "startedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], JobRun.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TriggerName" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "triggerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerType" }),
        __metadata("design:type", String)
    ], JobRun.prototype, "workerType", void 0);
    return JobRun;
}(SpeakeasyBase));
export { JobRun };
