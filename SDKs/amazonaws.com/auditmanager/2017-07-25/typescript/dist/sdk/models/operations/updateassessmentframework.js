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
var UpdateAssessmentFrameworkPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssessmentFrameworkPathParams, _super);
    function UpdateAssessmentFrameworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=frameworkId" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkPathParams.prototype, "frameworkId", void 0);
    return UpdateAssessmentFrameworkPathParams;
}(SpeakeasyBase));
export { UpdateAssessmentFrameworkPathParams };
var UpdateAssessmentFrameworkHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssessmentFrameworkHeaders, _super);
    function UpdateAssessmentFrameworkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssessmentFrameworkHeaders;
}(SpeakeasyBase));
export { UpdateAssessmentFrameworkHeaders };
var UpdateAssessmentFrameworkRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssessmentFrameworkRequestBody, _super);
    function UpdateAssessmentFrameworkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=complianceType" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkRequestBody.prototype, "complianceType", void 0);
    __decorate([
        Metadata({ data: "json, name=controlSets", elemType: shared.UpdateAssessmentFrameworkControlSet }),
        __metadata("design:type", Array)
    ], UpdateAssessmentFrameworkRequestBody.prototype, "controlSets", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkRequestBody.prototype, "name", void 0);
    return UpdateAssessmentFrameworkRequestBody;
}(SpeakeasyBase));
export { UpdateAssessmentFrameworkRequestBody };
var UpdateAssessmentFrameworkRequest = /** @class */ (function (_super) {
    __extends(UpdateAssessmentFrameworkRequest, _super);
    function UpdateAssessmentFrameworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentFrameworkPathParams)
    ], UpdateAssessmentFrameworkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAssessmentFrameworkHeaders)
    ], UpdateAssessmentFrameworkRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssessmentFrameworkRequestBody)
    ], UpdateAssessmentFrameworkRequest.prototype, "request", void 0);
    return UpdateAssessmentFrameworkRequest;
}(SpeakeasyBase));
export { UpdateAssessmentFrameworkRequest };
var UpdateAssessmentFrameworkResponse = /** @class */ (function (_super) {
    __extends(UpdateAssessmentFrameworkResponse, _super);
    function UpdateAssessmentFrameworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentFrameworkResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAssessmentFrameworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentFrameworkResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentFrameworkResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAssessmentFrameworkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAssessmentFrameworkResponse)
    ], UpdateAssessmentFrameworkResponse.prototype, "updateAssessmentFrameworkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAssessmentFrameworkResponse.prototype, "validationException", void 0);
    return UpdateAssessmentFrameworkResponse;
}(SpeakeasyBase));
export { UpdateAssessmentFrameworkResponse };
