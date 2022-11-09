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
export var GetCreateTemplateActionEnum;
(function (GetCreateTemplateActionEnum) {
    GetCreateTemplateActionEnum["CreateTemplate"] = "CreateTemplate";
})(GetCreateTemplateActionEnum || (GetCreateTemplateActionEnum = {}));
// GetCreateTemplateTemplate
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
var GetCreateTemplateTemplate = /** @class */ (function (_super) {
    __extends(GetCreateTemplateTemplate, _super);
    function GetCreateTemplateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=HtmlPart" }),
        __metadata("design:type", String)
    ], GetCreateTemplateTemplate.prototype, "htmlPart", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=SubjectPart" }),
        __metadata("design:type", String)
    ], GetCreateTemplateTemplate.prototype, "subjectPart", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=TemplateName" }),
        __metadata("design:type", String)
    ], GetCreateTemplateTemplate.prototype, "templateName", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=TextPart" }),
        __metadata("design:type", String)
    ], GetCreateTemplateTemplate.prototype, "textPart", void 0);
    return GetCreateTemplateTemplate;
}(SpeakeasyBase));
export { GetCreateTemplateTemplate };
export var GetCreateTemplateVersionEnum;
(function (GetCreateTemplateVersionEnum) {
    GetCreateTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetCreateTemplateVersionEnum || (GetCreateTemplateVersionEnum = {}));
var GetCreateTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateTemplateQueryParams, _super);
    function GetCreateTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Template" }),
        __metadata("design:type", GetCreateTemplateTemplate)
    ], GetCreateTemplateQueryParams.prototype, "template", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateTemplateQueryParams.prototype, "version", void 0);
    return GetCreateTemplateQueryParams;
}(SpeakeasyBase));
export { GetCreateTemplateQueryParams };
var GetCreateTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetCreateTemplateHeaders, _super);
    function GetCreateTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateTemplateHeaders;
}(SpeakeasyBase));
export { GetCreateTemplateHeaders };
var GetCreateTemplateRequest = /** @class */ (function (_super) {
    __extends(GetCreateTemplateRequest, _super);
    function GetCreateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTemplateQueryParams)
    ], GetCreateTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateTemplateHeaders)
    ], GetCreateTemplateRequest.prototype, "headers", void 0);
    return GetCreateTemplateRequest;
}(SpeakeasyBase));
export { GetCreateTemplateRequest };
var GetCreateTemplateResponse = /** @class */ (function (_super) {
    __extends(GetCreateTemplateResponse, _super);
    function GetCreateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateTemplateResponse.prototype, "statusCode", void 0);
    return GetCreateTemplateResponse;
}(SpeakeasyBase));
export { GetCreateTemplateResponse };
