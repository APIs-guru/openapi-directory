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
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { JobProcessDetails } from "./jobprocessdetails";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";
import { TimeoutConfig } from "./timeoutconfig";
// Job
/**
 * The <code>Job</code> object contains details about a job.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", AbortConfig)
    ], Job.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], Job.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedAt" }),
        __metadata("design:type", Date)
    ], Job.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Job.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Job.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceCanceled" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "forceCanceled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobArn" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", JobExecutionsRolloutConfig)
    ], Job.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobProcessDetails" }),
        __metadata("design:type", JobProcessDetails)
    ], Job.prototype, "jobProcessDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTemplateArn" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobTemplateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], Job.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceId" }),
        __metadata("design:type", String)
    ], Job.prototype, "namespaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" }),
        __metadata("design:type", PresignedUrlConfig)
    ], Job.prototype, "presignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], Job.prototype, "reasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetSelection" }),
        __metadata("design:type", String)
    ], Job.prototype, "targetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], Job.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", TimeoutConfig)
    ], Job.prototype, "timeoutConfig", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
