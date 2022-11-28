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
import * as shared from "../shared";
var UpdateAssessmentControlPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlPathParams, _super);
    function UpdateAssessmentControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlPathParams.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlPathParams.prototype, "controlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlPathParams.prototype, "controlSetId", void 0);
    return UpdateAssessmentControlPathParams;
}(SpeakeasyBase));
export { UpdateAssessmentControlPathParams };
var UpdateAssessmentControlHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlHeaders, _super);
    function UpdateAssessmentControlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssessmentControlHeaders;
}(SpeakeasyBase));
export { UpdateAssessmentControlHeaders };
export var UpdateAssessmentControlRequestBodyControlStatusEnum;
(function (UpdateAssessmentControlRequestBodyControlStatusEnum) {
    UpdateAssessmentControlRequestBodyControlStatusEnum["UnderReview"] = "UNDER_REVIEW";
    UpdateAssessmentControlRequestBodyControlStatusEnum["Reviewed"] = "REVIEWED";
    UpdateAssessmentControlRequestBodyControlStatusEnum["Inactive"] = "INACTIVE";
})(UpdateAssessmentControlRequestBodyControlStatusEnum || (UpdateAssessmentControlRequestBodyControlStatusEnum = {}));
var UpdateAssessmentControlRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlRequestBody, _super);
    function UpdateAssessmentControlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlRequestBody.prototype, "commentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlStatus" }),
        __metadata("design:type", String)
    ], UpdateAssessmentControlRequestBody.prototype, "controlStatus", void 0);
    return UpdateAssessmentControlRequestBody;
}(SpeakeasyBase));
export { UpdateAssessmentControlRequestBody };
var UpdateAssessmentControlRequest = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlRequest, _super);
    function UpdateAssessmentControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssessmentControlPathParams)
    ], UpdateAssessmentControlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssessmentControlHeaders)
    ], UpdateAssessmentControlRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssessmentControlRequestBody)
    ], UpdateAssessmentControlRequest.prototype, "request", void 0);
    return UpdateAssessmentControlRequest;
}(SpeakeasyBase));
export { UpdateAssessmentControlRequest };
var UpdateAssessmentControlResponse = /** @class */ (function (_super) {
    __extends(UpdateAssessmentControlResponse, _super);
    function UpdateAssessmentControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssessmentControlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAssessmentControlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAssessmentControlResponse)
    ], UpdateAssessmentControlResponse.prototype, "updateAssessmentControlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentControlResponse.prototype, "validationException", void 0);
    return UpdateAssessmentControlResponse;
}(SpeakeasyBase));
export { UpdateAssessmentControlResponse };
