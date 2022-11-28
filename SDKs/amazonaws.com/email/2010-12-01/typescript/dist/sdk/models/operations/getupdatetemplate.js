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
export var GetUpdateTemplateActionEnum;
(function (GetUpdateTemplateActionEnum) {
    GetUpdateTemplateActionEnum["UpdateTemplate"] = "UpdateTemplate";
})(GetUpdateTemplateActionEnum || (GetUpdateTemplateActionEnum = {}));
// GetUpdateTemplateTemplate
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
var GetUpdateTemplateTemplate = /** @class */ (function (_super) {
    __extends(GetUpdateTemplateTemplate, _super);
    function GetUpdateTemplateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=HtmlPart" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateTemplate.prototype, "htmlPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=SubjectPart" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateTemplate.prototype, "subjectPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=TemplateName" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateTemplate.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=TextPart" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateTemplate.prototype, "textPart", void 0);
    return GetUpdateTemplateTemplate;
}(SpeakeasyBase));
export { GetUpdateTemplateTemplate };
export var GetUpdateTemplateVersionEnum;
(function (GetUpdateTemplateVersionEnum) {
    GetUpdateTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetUpdateTemplateVersionEnum || (GetUpdateTemplateVersionEnum = {}));
var GetUpdateTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateTemplateQueryParams, _super);
    function GetUpdateTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Template" }),
        __metadata("design:type", GetUpdateTemplateTemplate)
    ], GetUpdateTemplateQueryParams.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateQueryParams.prototype, "version", void 0);
    return GetUpdateTemplateQueryParams;
}(SpeakeasyBase));
export { GetUpdateTemplateQueryParams };
var GetUpdateTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateTemplateHeaders, _super);
    function GetUpdateTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateTemplateHeaders;
}(SpeakeasyBase));
export { GetUpdateTemplateHeaders };
var GetUpdateTemplateRequest = /** @class */ (function (_super) {
    __extends(GetUpdateTemplateRequest, _super);
    function GetUpdateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateTemplateQueryParams)
    ], GetUpdateTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateTemplateHeaders)
    ], GetUpdateTemplateRequest.prototype, "headers", void 0);
    return GetUpdateTemplateRequest;
}(SpeakeasyBase));
export { GetUpdateTemplateRequest };
var GetUpdateTemplateResponse = /** @class */ (function (_super) {
    __extends(GetUpdateTemplateResponse, _super);
    function GetUpdateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateTemplateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateTemplateResponse.prototype, "statusCode", void 0);
    return GetUpdateTemplateResponse;
}(SpeakeasyBase));
export { GetUpdateTemplateResponse };
