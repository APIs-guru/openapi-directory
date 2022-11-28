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
export var GetDeleteCustomVerificationEmailTemplateActionEnum;
(function (GetDeleteCustomVerificationEmailTemplateActionEnum) {
    GetDeleteCustomVerificationEmailTemplateActionEnum["DeleteCustomVerificationEmailTemplate"] = "DeleteCustomVerificationEmailTemplate";
})(GetDeleteCustomVerificationEmailTemplateActionEnum || (GetDeleteCustomVerificationEmailTemplateActionEnum = {}));
export var GetDeleteCustomVerificationEmailTemplateVersionEnum;
(function (GetDeleteCustomVerificationEmailTemplateVersionEnum) {
    GetDeleteCustomVerificationEmailTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteCustomVerificationEmailTemplateVersionEnum || (GetDeleteCustomVerificationEmailTemplateVersionEnum = {}));
var GetDeleteCustomVerificationEmailTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteCustomVerificationEmailTemplateQueryParams, _super);
    function GetDeleteCustomVerificationEmailTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateQueryParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateQueryParams.prototype, "version", void 0);
    return GetDeleteCustomVerificationEmailTemplateQueryParams;
}(SpeakeasyBase));
export { GetDeleteCustomVerificationEmailTemplateQueryParams };
var GetDeleteCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteCustomVerificationEmailTemplateHeaders, _super);
    function GetDeleteCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { GetDeleteCustomVerificationEmailTemplateHeaders };
var GetDeleteCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(GetDeleteCustomVerificationEmailTemplateRequest, _super);
    function GetDeleteCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteCustomVerificationEmailTemplateQueryParams)
    ], GetDeleteCustomVerificationEmailTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteCustomVerificationEmailTemplateHeaders)
    ], GetDeleteCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    return GetDeleteCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { GetDeleteCustomVerificationEmailTemplateRequest };
var GetDeleteCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(GetDeleteCustomVerificationEmailTemplateResponse, _super);
    function GetDeleteCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    return GetDeleteCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { GetDeleteCustomVerificationEmailTemplateResponse };
