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
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";
var ContentSubmissionSharedBusinessEntitiesContentSubmission = /** @class */ (function (_super) {
    __extends(ContentSubmissionSharedBusinessEntitiesContentSubmission, _super);
    function ContentSubmissionSharedBusinessEntitiesContentSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes", elemType: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }),
        __metadata("design:type", Array)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentDefinitionID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "contentDefinitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentSubmissionID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "contentSubmissionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Definition" }),
        __metadata("design:type", ContentSubmissionSharedBusinessEntitiesContentDefinition)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobRunID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "jobRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageID" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "packageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseNotes" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "releaseNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Repository" }),
        __metadata("design:type", String)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubmissionDate" }),
        __metadata("design:type", Date)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "submissionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], ContentSubmissionSharedBusinessEntitiesContentSubmission.prototype, "version", void 0);
    return ContentSubmissionSharedBusinessEntitiesContentSubmission;
}(SpeakeasyBase));
export { ContentSubmissionSharedBusinessEntitiesContentSubmission };
