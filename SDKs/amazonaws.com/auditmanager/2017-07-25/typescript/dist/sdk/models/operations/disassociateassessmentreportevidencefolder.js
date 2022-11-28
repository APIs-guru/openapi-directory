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
var DisassociateAssessmentReportEvidenceFolderPathParams = /** @class */ (function (_super) {
    __extends(DisassociateAssessmentReportEvidenceFolderPathParams, _super);
    function DisassociateAssessmentReportEvidenceFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderPathParams.prototype, "assessmentId", void 0);
    return DisassociateAssessmentReportEvidenceFolderPathParams;
}(SpeakeasyBase));
export { DisassociateAssessmentReportEvidenceFolderPathParams };
var DisassociateAssessmentReportEvidenceFolderHeaders = /** @class */ (function (_super) {
    __extends(DisassociateAssessmentReportEvidenceFolderHeaders, _super);
    function DisassociateAssessmentReportEvidenceFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateAssessmentReportEvidenceFolderHeaders;
}(SpeakeasyBase));
export { DisassociateAssessmentReportEvidenceFolderHeaders };
var DisassociateAssessmentReportEvidenceFolderRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateAssessmentReportEvidenceFolderRequestBody, _super);
    function DisassociateAssessmentReportEvidenceFolderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceFolderId" }),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderRequestBody.prototype, "evidenceFolderId", void 0);
    return DisassociateAssessmentReportEvidenceFolderRequestBody;
}(SpeakeasyBase));
export { DisassociateAssessmentReportEvidenceFolderRequestBody };
var DisassociateAssessmentReportEvidenceFolderRequest = /** @class */ (function (_super) {
    __extends(DisassociateAssessmentReportEvidenceFolderRequest, _super);
    function DisassociateAssessmentReportEvidenceFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateAssessmentReportEvidenceFolderPathParams)
    ], DisassociateAssessmentReportEvidenceFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateAssessmentReportEvidenceFolderHeaders)
    ], DisassociateAssessmentReportEvidenceFolderRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateAssessmentReportEvidenceFolderRequestBody)
    ], DisassociateAssessmentReportEvidenceFolderRequest.prototype, "request", void 0);
    return DisassociateAssessmentReportEvidenceFolderRequest;
}(SpeakeasyBase));
export { DisassociateAssessmentReportEvidenceFolderRequest };
var DisassociateAssessmentReportEvidenceFolderResponse = /** @class */ (function (_super) {
    __extends(DisassociateAssessmentReportEvidenceFolderResponse, _super);
    function DisassociateAssessmentReportEvidenceFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "disassociateAssessmentReportEvidenceFolderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateAssessmentReportEvidenceFolderResponse.prototype, "validationException", void 0);
    return DisassociateAssessmentReportEvidenceFolderResponse;
}(SpeakeasyBase));
export { DisassociateAssessmentReportEvidenceFolderResponse };
