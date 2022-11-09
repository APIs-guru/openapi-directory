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
var UpdateAssessmentStatusPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssessmentStatusPathParams, _super);
    function UpdateAssessmentStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusPathParams.prototype, "assessmentId", void 0);
    return UpdateAssessmentStatusPathParams;
}(SpeakeasyBase));
export { UpdateAssessmentStatusPathParams };
var UpdateAssessmentStatusHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssessmentStatusHeaders, _super);
    function UpdateAssessmentStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssessmentStatusHeaders;
}(SpeakeasyBase));
export { UpdateAssessmentStatusHeaders };
export var UpdateAssessmentStatusRequestBodyStatusEnum;
(function (UpdateAssessmentStatusRequestBodyStatusEnum) {
    UpdateAssessmentStatusRequestBodyStatusEnum["Active"] = "ACTIVE";
    UpdateAssessmentStatusRequestBodyStatusEnum["Inactive"] = "INACTIVE";
})(UpdateAssessmentStatusRequestBodyStatusEnum || (UpdateAssessmentStatusRequestBodyStatusEnum = {}));
var UpdateAssessmentStatusRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssessmentStatusRequestBody, _super);
    function UpdateAssessmentStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusRequestBody.prototype, "status", void 0);
    return UpdateAssessmentStatusRequestBody;
}(SpeakeasyBase));
export { UpdateAssessmentStatusRequestBody };
var UpdateAssessmentStatusRequest = /** @class */ (function (_super) {
    __extends(UpdateAssessmentStatusRequest, _super);
    function UpdateAssessmentStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentStatusPathParams)
    ], UpdateAssessmentStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentStatusHeaders)
    ], UpdateAssessmentStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssessmentStatusRequestBody)
    ], UpdateAssessmentStatusRequest.prototype, "request", void 0);
    return UpdateAssessmentStatusRequest;
}(SpeakeasyBase));
export { UpdateAssessmentStatusRequest };
var UpdateAssessmentStatusResponse = /** @class */ (function (_super) {
    __extends(UpdateAssessmentStatusResponse, _super);
    function UpdateAssessmentStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentStatusResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAssessmentStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentStatusResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentStatusResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAssessmentStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAssessmentStatusResponse)
    ], UpdateAssessmentStatusResponse.prototype, "updateAssessmentStatusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentStatusResponse.prototype, "validationException", void 0);
    return UpdateAssessmentStatusResponse;
}(SpeakeasyBase));
export { UpdateAssessmentStatusResponse };
