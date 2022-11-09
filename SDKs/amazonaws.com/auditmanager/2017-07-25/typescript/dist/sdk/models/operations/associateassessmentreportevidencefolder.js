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
var AssociateAssessmentReportEvidenceFolderPathParams = /** @class */ (function (_super) {
    __extends(AssociateAssessmentReportEvidenceFolderPathParams, _super);
    function AssociateAssessmentReportEvidenceFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderPathParams.prototype, "assessmentId", void 0);
    return AssociateAssessmentReportEvidenceFolderPathParams;
}(SpeakeasyBase));
export { AssociateAssessmentReportEvidenceFolderPathParams };
var AssociateAssessmentReportEvidenceFolderHeaders = /** @class */ (function (_super) {
    __extends(AssociateAssessmentReportEvidenceFolderHeaders, _super);
    function AssociateAssessmentReportEvidenceFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateAssessmentReportEvidenceFolderHeaders;
}(SpeakeasyBase));
export { AssociateAssessmentReportEvidenceFolderHeaders };
var AssociateAssessmentReportEvidenceFolderRequestBody = /** @class */ (function (_super) {
    __extends(AssociateAssessmentReportEvidenceFolderRequestBody, _super);
    function AssociateAssessmentReportEvidenceFolderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=evidenceFolderId" }),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderRequestBody.prototype, "evidenceFolderId", void 0);
    return AssociateAssessmentReportEvidenceFolderRequestBody;
}(SpeakeasyBase));
export { AssociateAssessmentReportEvidenceFolderRequestBody };
var AssociateAssessmentReportEvidenceFolderRequest = /** @class */ (function (_super) {
    __extends(AssociateAssessmentReportEvidenceFolderRequest, _super);
    function AssociateAssessmentReportEvidenceFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateAssessmentReportEvidenceFolderPathParams)
    ], AssociateAssessmentReportEvidenceFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateAssessmentReportEvidenceFolderHeaders)
    ], AssociateAssessmentReportEvidenceFolderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateAssessmentReportEvidenceFolderRequestBody)
    ], AssociateAssessmentReportEvidenceFolderRequest.prototype, "request", void 0);
    return AssociateAssessmentReportEvidenceFolderRequest;
}(SpeakeasyBase));
export { AssociateAssessmentReportEvidenceFolderRequest };
var AssociateAssessmentReportEvidenceFolderResponse = /** @class */ (function (_super) {
    __extends(AssociateAssessmentReportEvidenceFolderResponse, _super);
    function AssociateAssessmentReportEvidenceFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "associateAssessmentReportEvidenceFolderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssessmentReportEvidenceFolderResponse.prototype, "validationException", void 0);
    return AssociateAssessmentReportEvidenceFolderResponse;
}(SpeakeasyBase));
export { AssociateAssessmentReportEvidenceFolderResponse };
