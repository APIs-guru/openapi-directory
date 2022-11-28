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
import { BuildSystemSharedDtoActivityRunStatus } from "./buildsystemshareddtoactivityrunstatus";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";
// BuildSystemSharedDtoActivityRunInput
/**
 * A DTO for an IActivityRun
**/
var BuildSystemSharedDtoActivityRunInput = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoActivityRunInput, _super);
    function BuildSystemSharedDtoActivityRunInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityRunID, form, name=ActivityRunID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "activityRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate, form, name=EndDate;" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobActivityID, form, name=JobActivityID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "jobActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunID, form, name=JobRunID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "jobRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate, form, name=StartDate;" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" }),
        __metadata("design:type", BuildSystemSharedDtoActivityRunStatus)
    ], BuildSystemSharedDtoActivityRunInput.prototype, "status", void 0);
    return BuildSystemSharedDtoActivityRunInput;
}(SpeakeasyBase));
export { BuildSystemSharedDtoActivityRunInput };
// BuildSystemSharedDtoActivityRun
/**
 * A DTO for an IActivityRun
**/
var BuildSystemSharedDtoActivityRun = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoActivityRun, _super);
    function BuildSystemSharedDtoActivityRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityRunID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRun.prototype, "activityRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoActivityRun.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobActivityID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRun.prototype, "jobActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityRun.prototype, "jobRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameterValue }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoActivityRun.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], BuildSystemSharedDtoActivityRun.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", BuildSystemSharedDtoActivityRunStatus)
    ], BuildSystemSharedDtoActivityRun.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Steps", elemType: BuildSystemSharedDtoActivityStep }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoActivityRun.prototype, "steps", void 0);
    return BuildSystemSharedDtoActivityRun;
}(SpeakeasyBase));
export { BuildSystemSharedDtoActivityRun };
