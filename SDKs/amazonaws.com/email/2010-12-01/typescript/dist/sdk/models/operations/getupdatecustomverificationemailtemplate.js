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
export var GetUpdateCustomVerificationEmailTemplateActionEnum;
(function (GetUpdateCustomVerificationEmailTemplateActionEnum) {
    GetUpdateCustomVerificationEmailTemplateActionEnum["UpdateCustomVerificationEmailTemplate"] = "UpdateCustomVerificationEmailTemplate";
})(GetUpdateCustomVerificationEmailTemplateActionEnum || (GetUpdateCustomVerificationEmailTemplateActionEnum = {}));
export var GetUpdateCustomVerificationEmailTemplateVersionEnum;
(function (GetUpdateCustomVerificationEmailTemplateVersionEnum) {
    GetUpdateCustomVerificationEmailTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetUpdateCustomVerificationEmailTemplateVersionEnum || (GetUpdateCustomVerificationEmailTemplateVersionEnum = {}));
var GetUpdateCustomVerificationEmailTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateCustomVerificationEmailTemplateQueryParams, _super);
    function GetUpdateCustomVerificationEmailTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FailureRedirectionURL" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "failureRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "fromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SuccessRedirectionURL" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "successRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateContent" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "templateContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateSubject" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "templateSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateQueryParams.prototype, "version", void 0);
    return GetUpdateCustomVerificationEmailTemplateQueryParams;
}(SpeakeasyBase));
export { GetUpdateCustomVerificationEmailTemplateQueryParams };
var GetUpdateCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateCustomVerificationEmailTemplateHeaders, _super);
    function GetUpdateCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { GetUpdateCustomVerificationEmailTemplateHeaders };
var GetUpdateCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(GetUpdateCustomVerificationEmailTemplateRequest, _super);
    function GetUpdateCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateCustomVerificationEmailTemplateQueryParams)
    ], GetUpdateCustomVerificationEmailTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateCustomVerificationEmailTemplateHeaders)
    ], GetUpdateCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    return GetUpdateCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { GetUpdateCustomVerificationEmailTemplateRequest };
var GetUpdateCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(GetUpdateCustomVerificationEmailTemplateResponse, _super);
    function GetUpdateCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateCustomVerificationEmailTemplateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    return GetUpdateCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { GetUpdateCustomVerificationEmailTemplateResponse };
