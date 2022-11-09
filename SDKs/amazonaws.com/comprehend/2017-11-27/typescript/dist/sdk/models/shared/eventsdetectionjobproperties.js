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
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
// EventsDetectionJobProperties
/**
 * Provides information about an events detection job.
**/
var EventsDetectionJobProperties = /** @class */ (function (_super) {
    __extends(EventsDetectionJobProperties, _super);
    function EventsDetectionJobProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DataAccessRoleArn" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "dataAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], EventsDetectionJobProperties.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", InputDataConfig)
    ], EventsDetectionJobProperties.prototype, "inputDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=JobArn" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "jobArn", void 0);
    __decorate([
        Metadata({ data: "json, name=JobId" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "json, name=JobName" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "jobName", void 0);
    __decorate([
        Metadata({ data: "json, name=JobStatus" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "jobStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "languageCode", void 0);
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], EventsDetectionJobProperties.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", OutputDataConfig)
    ], EventsDetectionJobProperties.prototype, "outputDataConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=SubmitTime" }),
        __metadata("design:type", Date)
    ], EventsDetectionJobProperties.prototype, "submitTime", void 0);
    __decorate([
        Metadata({ data: "json, name=TargetEventTypes" }),
        __metadata("design:type", Array)
    ], EventsDetectionJobProperties.prototype, "targetEventTypes", void 0);
    return EventsDetectionJobProperties;
}(SpeakeasyBase));
export { EventsDetectionJobProperties };
