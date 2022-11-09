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
var BatchDisassociateAssessmentReportEvidencePathParams = /** @class */ (function (_super) {
    __extends(BatchDisassociateAssessmentReportEvidencePathParams, _super);
    function BatchDisassociateAssessmentReportEvidencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidencePathParams.prototype, "assessmentId", void 0);
    return BatchDisassociateAssessmentReportEvidencePathParams;
}(SpeakeasyBase));
export { BatchDisassociateAssessmentReportEvidencePathParams };
var BatchDisassociateAssessmentReportEvidenceHeaders = /** @class */ (function (_super) {
    __extends(BatchDisassociateAssessmentReportEvidenceHeaders, _super);
    function BatchDisassociateAssessmentReportEvidenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDisassociateAssessmentReportEvidenceHeaders;
}(SpeakeasyBase));
export { BatchDisassociateAssessmentReportEvidenceHeaders };
var BatchDisassociateAssessmentReportEvidenceRequestBody = /** @class */ (function (_super) {
    __extends(BatchDisassociateAssessmentReportEvidenceRequestBody, _super);
    function BatchDisassociateAssessmentReportEvidenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=evidenceFolderId" }),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceRequestBody.prototype, "evidenceFolderId", void 0);
    __decorate([
        Metadata({ data: "json, name=evidenceIds" }),
        __metadata("design:type", Array)
    ], BatchDisassociateAssessmentReportEvidenceRequestBody.prototype, "evidenceIds", void 0);
    return BatchDisassociateAssessmentReportEvidenceRequestBody;
}(SpeakeasyBase));
export { BatchDisassociateAssessmentReportEvidenceRequestBody };
var BatchDisassociateAssessmentReportEvidenceRequest = /** @class */ (function (_super) {
    __extends(BatchDisassociateAssessmentReportEvidenceRequest, _super);
    function BatchDisassociateAssessmentReportEvidenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDisassociateAssessmentReportEvidencePathParams)
    ], BatchDisassociateAssessmentReportEvidenceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDisassociateAssessmentReportEvidenceHeaders)
    ], BatchDisassociateAssessmentReportEvidenceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDisassociateAssessmentReportEvidenceRequestBody)
    ], BatchDisassociateAssessmentReportEvidenceRequest.prototype, "request", void 0);
    return BatchDisassociateAssessmentReportEvidenceRequest;
}(SpeakeasyBase));
export { BatchDisassociateAssessmentReportEvidenceRequest };
var BatchDisassociateAssessmentReportEvidenceResponse = /** @class */ (function (_super) {
    __extends(BatchDisassociateAssessmentReportEvidenceResponse, _super);
    function BatchDisassociateAssessmentReportEvidenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchDisassociateAssessmentReportEvidenceResponse)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "batchDisassociateAssessmentReportEvidenceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateAssessmentReportEvidenceResponse.prototype, "validationException", void 0);
    return BatchDisassociateAssessmentReportEvidenceResponse;
}(SpeakeasyBase));
export { BatchDisassociateAssessmentReportEvidenceResponse };
