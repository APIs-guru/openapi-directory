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
import { MetricsSummary } from "./metricssummary";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { JobStateEnum } from "./jobstateenum";
import { TypeEnum } from "./typeenum";
// CodeReviewSummary
/**
 *  Information about the summary of the code review.
**/
var CodeReviewSummary = /** @class */ (function (_super) {
    __extends(CodeReviewSummary, _super);
    function CodeReviewSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeReviewArn" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "codeReviewArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" }),
        __metadata("design:type", Date)
    ], CodeReviewSummary.prototype, "createdTimeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" }),
        __metadata("design:type", Date)
    ], CodeReviewSummary.prototype, "lastUpdatedTimeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricsSummary" }),
        __metadata("design:type", MetricsSummary)
    ], CodeReviewSummary.prototype, "metricsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderType" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "providerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PullRequestId" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "pullRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepositoryName" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "repositoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceCodeType" }),
        __metadata("design:type", SourceCodeType)
    ], CodeReviewSummary.prototype, "sourceCodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CodeReviewSummary.prototype, "type", void 0);
    return CodeReviewSummary;
}(SpeakeasyBase));
export { CodeReviewSummary };
