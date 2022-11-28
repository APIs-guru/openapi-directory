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
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
export var BuildSystemSharedDtoJobRunStatusEnum;
(function (BuildSystemSharedDtoJobRunStatusEnum) {
    BuildSystemSharedDtoJobRunStatusEnum["Ready"] = "Ready";
    BuildSystemSharedDtoJobRunStatusEnum["InProgress"] = "InProgress";
    BuildSystemSharedDtoJobRunStatusEnum["Succeeded"] = "Succeeded";
    BuildSystemSharedDtoJobRunStatusEnum["Cancelled"] = "Cancelled";
    BuildSystemSharedDtoJobRunStatusEnum["Failed"] = "Failed";
})(BuildSystemSharedDtoJobRunStatusEnum || (BuildSystemSharedDtoJobRunStatusEnum = {}));
// BuildSystemSharedDtoJobRunInput
/**
 * A DTO for an IJobRun
**/
var BuildSystemSharedDtoJobRunInput = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoJobRunInput, _super);
    function BuildSystemSharedDtoJobRunInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate, form, name=EndDate;" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoJobRunInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobID, form, name=JobID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoJobRunInput.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunID, form, name=JobRunID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoJobRunInput.prototype, "jobRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate, form, name=StartDate;" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoJobRunInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoJobRunInput.prototype, "status", void 0);
    return BuildSystemSharedDtoJobRunInput;
}(SpeakeasyBase));
export { BuildSystemSharedDtoJobRunInput };
// BuildSystemSharedDtoJobRun
/**
 * A DTO for an IJobRun
**/
var BuildSystemSharedDtoJobRun = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoJobRun, _super);
    function BuildSystemSharedDtoJobRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityRuns", elemType: BuildSystemSharedDtoActivityRun }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoJobRun.prototype, "activityRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoJobRun.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoJobRun.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoJobRun.prototype, "jobRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameterValue }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoJobRun.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoJobRun.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoJobRun.prototype, "status", void 0);
    return BuildSystemSharedDtoJobRun;
}(SpeakeasyBase));
export { BuildSystemSharedDtoJobRun };
