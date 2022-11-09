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
var BatchImportEvidenceToAssessmentControlPathParams = /** @class */ (function (_super) {
    __extends(BatchImportEvidenceToAssessmentControlPathParams, _super);
    function BatchImportEvidenceToAssessmentControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlPathParams.prototype, "assessmentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=controlId" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlPathParams.prototype, "controlId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlPathParams.prototype, "controlSetId", void 0);
    return BatchImportEvidenceToAssessmentControlPathParams;
}(SpeakeasyBase));
export { BatchImportEvidenceToAssessmentControlPathParams };
var BatchImportEvidenceToAssessmentControlHeaders = /** @class */ (function (_super) {
    __extends(BatchImportEvidenceToAssessmentControlHeaders, _super);
    function BatchImportEvidenceToAssessmentControlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchImportEvidenceToAssessmentControlHeaders;
}(SpeakeasyBase));
export { BatchImportEvidenceToAssessmentControlHeaders };
var BatchImportEvidenceToAssessmentControlRequestBody = /** @class */ (function (_super) {
    __extends(BatchImportEvidenceToAssessmentControlRequestBody, _super);
    function BatchImportEvidenceToAssessmentControlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=manualEvidence", elemType: shared.ManualEvidence }),
        __metadata("design:type", Array)
    ], BatchImportEvidenceToAssessmentControlRequestBody.prototype, "manualEvidence", void 0);
    return BatchImportEvidenceToAssessmentControlRequestBody;
}(SpeakeasyBase));
export { BatchImportEvidenceToAssessmentControlRequestBody };
var BatchImportEvidenceToAssessmentControlRequest = /** @class */ (function (_super) {
    __extends(BatchImportEvidenceToAssessmentControlRequest, _super);
    function BatchImportEvidenceToAssessmentControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchImportEvidenceToAssessmentControlPathParams)
    ], BatchImportEvidenceToAssessmentControlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchImportEvidenceToAssessmentControlHeaders)
    ], BatchImportEvidenceToAssessmentControlRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchImportEvidenceToAssessmentControlRequestBody)
    ], BatchImportEvidenceToAssessmentControlRequest.prototype, "request", void 0);
    return BatchImportEvidenceToAssessmentControlRequest;
}(SpeakeasyBase));
export { BatchImportEvidenceToAssessmentControlRequest };
var BatchImportEvidenceToAssessmentControlResponse = /** @class */ (function (_super) {
    __extends(BatchImportEvidenceToAssessmentControlResponse, _super);
    function BatchImportEvidenceToAssessmentControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchImportEvidenceToAssessmentControlResponse)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "batchImportEvidenceToAssessmentControlResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchImportEvidenceToAssessmentControlResponse.prototype, "validationException", void 0);
    return BatchImportEvidenceToAssessmentControlResponse;
}(SpeakeasyBase));
export { BatchImportEvidenceToAssessmentControlResponse };
