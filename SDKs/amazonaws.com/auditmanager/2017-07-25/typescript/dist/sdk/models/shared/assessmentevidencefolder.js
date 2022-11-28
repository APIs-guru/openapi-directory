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
// AssessmentEvidenceFolder
/**
 *  The folder in which Audit Manager stores evidence for an assessment.
**/
var AssessmentEvidenceFolder = /** @class */ (function (_super) {
    __extends(AssessmentEvidenceFolder, _super);
    function AssessmentEvidenceFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentId" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentReportSelectionCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "assessmentReportSelectionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlId" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "controlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlName" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "controlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlSetId" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "controlSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], AssessmentEvidenceFolder.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceAwsServiceSourceCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceAwsServiceSourceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceByTypeComplianceCheckCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceByTypeComplianceCheckCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceByTypeComplianceCheckIssuesCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceByTypeComplianceCheckIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceByTypeConfigurationDataCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceByTypeConfigurationDataCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceByTypeManualCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceByTypeManualCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceByTypeUserActivityCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceByTypeUserActivityCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceResourcesIncludedCount" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "evidenceResourcesIncludedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssessmentEvidenceFolder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalEvidence" }),
        __metadata("design:type", Number)
    ], AssessmentEvidenceFolder.prototype, "totalEvidence", void 0);
    return AssessmentEvidenceFolder;
}(SpeakeasyBase));
export { AssessmentEvidenceFolder };
