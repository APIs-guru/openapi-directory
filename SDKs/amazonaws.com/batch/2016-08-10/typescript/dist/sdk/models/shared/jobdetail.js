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
import { ArrayPropertiesDetail } from "./arraypropertiesdetail";
import { ContainerDetail } from "./containerdetail";
import { NodeDetails } from "./nodedetails";
import { NodeProperties } from "./nodeproperties";
import { RetryStrategy } from "./retrystrategy";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTimeout } from "./jobtimeout";
// JobDetail
/**
 * An object representing an Batch job.
**/
var JobDetail = /** @class */ (function (_super) {
    __extends(JobDetail, _super);
    function JobDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arrayProperties" }),
        __metadata("design:type", ArrayPropertiesDetail)
    ], JobDetail.prototype, "arrayProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=attempts", elemType: shared.AttemptDetail }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "attempts", void 0);
    __decorate([
        Metadata({ data: "json, name=container" }),
        __metadata("design:type", ContainerDetail)
    ], JobDetail.prototype, "container", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=dependsOn", elemType: shared.JobDependency }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "dependsOn", void 0);
    __decorate([
        Metadata({ data: "json, name=jobArn" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobArn", void 0);
    __decorate([
        Metadata({ data: "json, name=jobDefinition" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobName", void 0);
    __decorate([
        Metadata({ data: "json, name=jobQueue" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobQueue", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeDetails" }),
        __metadata("design:type", NodeDetails)
    ], JobDetail.prototype, "nodeDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeProperties" }),
        __metadata("design:type", NodeProperties)
    ], JobDetail.prototype, "nodeProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], JobDetail.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=platformCapabilities" }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "platformCapabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", Boolean)
    ], JobDetail.prototype, "propagateTags", void 0);
    __decorate([
        Metadata({ data: "json, name=retryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], JobDetail.prototype, "retryStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=startedAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "startedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "statusReason", void 0);
    __decorate([
        Metadata({ data: "json, name=stoppedAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "stoppedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], JobDetail.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", JobTimeout)
    ], JobDetail.prototype, "timeout", void 0);
    return JobDetail;
}(SpeakeasyBase));
export { JobDetail };
