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
import { ExportDestination } from "./exportdestination";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { JobStatusEnum } from "./jobstatusenum";
// RecommendationExportJob
/**
 * <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
**/
var RecommendationExportJob = /** @class */ (function (_super) {
    __extends(RecommendationExportJob, _super);
    function RecommendationExportJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=creationTimestamp" }),
        __metadata("design:type", Date)
    ], RecommendationExportJob.prototype, "creationTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=destination" }),
        __metadata("design:type", ExportDestination)
    ], RecommendationExportJob.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], RecommendationExportJob.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], RecommendationExportJob.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdatedTimestamp" }),
        __metadata("design:type", Date)
    ], RecommendationExportJob.prototype, "lastUpdatedTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], RecommendationExportJob.prototype, "resourceType", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RecommendationExportJob.prototype, "status", void 0);
    return RecommendationExportJob;
}(SpeakeasyBase));
export { RecommendationExportJob };
