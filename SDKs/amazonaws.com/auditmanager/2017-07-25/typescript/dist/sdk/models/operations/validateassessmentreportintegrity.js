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
var ValidateAssessmentReportIntegrityHeaders = /** @class */ (function (_super) {
    __extends(ValidateAssessmentReportIntegrityHeaders, _super);
    function ValidateAssessmentReportIntegrityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ValidateAssessmentReportIntegrityHeaders;
}(SpeakeasyBase));
export { ValidateAssessmentReportIntegrityHeaders };
var ValidateAssessmentReportIntegrityRequestBody = /** @class */ (function (_super) {
    __extends(ValidateAssessmentReportIntegrityRequestBody, _super);
    function ValidateAssessmentReportIntegrityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=s3RelativePath" }),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityRequestBody.prototype, "s3RelativePath", void 0);
    return ValidateAssessmentReportIntegrityRequestBody;
}(SpeakeasyBase));
export { ValidateAssessmentReportIntegrityRequestBody };
var ValidateAssessmentReportIntegrityRequest = /** @class */ (function (_super) {
    __extends(ValidateAssessmentReportIntegrityRequest, _super);
    function ValidateAssessmentReportIntegrityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ValidateAssessmentReportIntegrityHeaders)
    ], ValidateAssessmentReportIntegrityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ValidateAssessmentReportIntegrityRequestBody)
    ], ValidateAssessmentReportIntegrityRequest.prototype, "request", void 0);
    return ValidateAssessmentReportIntegrityRequest;
}(SpeakeasyBase));
export { ValidateAssessmentReportIntegrityRequest };
var ValidateAssessmentReportIntegrityResponse = /** @class */ (function (_super) {
    __extends(ValidateAssessmentReportIntegrityResponse, _super);
    function ValidateAssessmentReportIntegrityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ValidateAssessmentReportIntegrityResponse)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "validateAssessmentReportIntegrityResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ValidateAssessmentReportIntegrityResponse.prototype, "validationException", void 0);
    return ValidateAssessmentReportIntegrityResponse;
}(SpeakeasyBase));
export { ValidateAssessmentReportIntegrityResponse };
