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
var UpdateAssessmentControlSetStatusPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlSetStatusPathParams, _super);
    function UpdateAssessmentControlSetStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusPathParams.prototype, "assessmentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusPathParams.prototype, "controlSetId", void 0);
    return UpdateAssessmentControlSetStatusPathParams;
}(SpeakeasyBase));
export { UpdateAssessmentControlSetStatusPathParams };
var UpdateAssessmentControlSetStatusHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlSetStatusHeaders, _super);
    function UpdateAssessmentControlSetStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssessmentControlSetStatusHeaders;
}(SpeakeasyBase));
export { UpdateAssessmentControlSetStatusHeaders };
export var UpdateAssessmentControlSetStatusRequestBodyStatusEnum;
(function (UpdateAssessmentControlSetStatusRequestBodyStatusEnum) {
    UpdateAssessmentControlSetStatusRequestBodyStatusEnum["Active"] = "ACTIVE";
    UpdateAssessmentControlSetStatusRequestBodyStatusEnum["UnderReview"] = "UNDER_REVIEW";
    UpdateAssessmentControlSetStatusRequestBodyStatusEnum["Reviewed"] = "REVIEWED";
})(UpdateAssessmentControlSetStatusRequestBodyStatusEnum || (UpdateAssessmentControlSetStatusRequestBodyStatusEnum = {}));
var UpdateAssessmentControlSetStatusRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlSetStatusRequestBody, _super);
    function UpdateAssessmentControlSetStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusRequestBody.prototype, "comment", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusRequestBody.prototype, "status", void 0);
    return UpdateAssessmentControlSetStatusRequestBody;
}(SpeakeasyBase));
export { UpdateAssessmentControlSetStatusRequestBody };
var UpdateAssessmentControlSetStatusRequest = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlSetStatusRequest, _super);
    function UpdateAssessmentControlSetStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentControlSetStatusPathParams)
    ], UpdateAssessmentControlSetStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentControlSetStatusHeaders)
    ], UpdateAssessmentControlSetStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssessmentControlSetStatusRequestBody)
    ], UpdateAssessmentControlSetStatusRequest.prototype, "request", void 0);
    return UpdateAssessmentControlSetStatusRequest;
}(SpeakeasyBase));
export { UpdateAssessmentControlSetStatusRequest };
var UpdateAssessmentControlSetStatusResponse = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlSetStatusResponse, _super);
    function UpdateAssessmentControlSetStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAssessmentControlSetStatusResponse)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "updateAssessmentControlSetStatusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlSetStatusResponse.prototype, "validationException", void 0);
    return UpdateAssessmentControlSetStatusResponse;
}(SpeakeasyBase));
export { UpdateAssessmentControlSetStatusResponse };
