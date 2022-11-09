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
var DeleteAssessmentFrameworkPathParams = /** @class */ (function (_super) {
    __extends(DeleteAssessmentFrameworkPathParams, _super);
    function DeleteAssessmentFrameworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=frameworkId" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkPathParams.prototype, "frameworkId", void 0);
    return DeleteAssessmentFrameworkPathParams;
}(SpeakeasyBase));
export { DeleteAssessmentFrameworkPathParams };
var DeleteAssessmentFrameworkHeaders = /** @class */ (function (_super) {
    __extends(DeleteAssessmentFrameworkHeaders, _super);
    function DeleteAssessmentFrameworkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteAssessmentFrameworkHeaders;
}(SpeakeasyBase));
export { DeleteAssessmentFrameworkHeaders };
var DeleteAssessmentFrameworkRequest = /** @class */ (function (_super) {
    __extends(DeleteAssessmentFrameworkRequest, _super);
    function DeleteAssessmentFrameworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAssessmentFrameworkPathParams)
    ], DeleteAssessmentFrameworkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAssessmentFrameworkHeaders)
    ], DeleteAssessmentFrameworkRequest.prototype, "headers", void 0);
    return DeleteAssessmentFrameworkRequest;
}(SpeakeasyBase));
export { DeleteAssessmentFrameworkRequest };
var DeleteAssessmentFrameworkResponse = /** @class */ (function (_super) {
    __extends(DeleteAssessmentFrameworkResponse, _super);
    function DeleteAssessmentFrameworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssessmentFrameworkResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteAssessmentFrameworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteAssessmentFrameworkResponse.prototype, "deleteAssessmentFrameworkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssessmentFrameworkResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssessmentFrameworkResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteAssessmentFrameworkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssessmentFrameworkResponse.prototype, "validationException", void 0);
    return DeleteAssessmentFrameworkResponse;
}(SpeakeasyBase));
export { DeleteAssessmentFrameworkResponse };
