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
export var PostDeleteConfigurationTemplateActionEnum;
(function (PostDeleteConfigurationTemplateActionEnum) {
    PostDeleteConfigurationTemplateActionEnum["DeleteConfigurationTemplate"] = "DeleteConfigurationTemplate";
})(PostDeleteConfigurationTemplateActionEnum || (PostDeleteConfigurationTemplateActionEnum = {}));
export var PostDeleteConfigurationTemplateVersionEnum;
(function (PostDeleteConfigurationTemplateVersionEnum) {
    PostDeleteConfigurationTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteConfigurationTemplateVersionEnum || (PostDeleteConfigurationTemplateVersionEnum = {}));
var PostDeleteConfigurationTemplateQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationTemplateQueryParams, _super);
    function PostDeleteConfigurationTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateQueryParams.prototype, "version", void 0);
    return PostDeleteConfigurationTemplateQueryParams;
}(SpeakeasyBase));
export { PostDeleteConfigurationTemplateQueryParams };
var PostDeleteConfigurationTemplateHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationTemplateHeaders, _super);
    function PostDeleteConfigurationTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteConfigurationTemplateHeaders;
}(SpeakeasyBase));
export { PostDeleteConfigurationTemplateHeaders };
var PostDeleteConfigurationTemplateRequest = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationTemplateRequest, _super);
    function PostDeleteConfigurationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationTemplateQueryParams)
    ], PostDeleteConfigurationTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationTemplateHeaders)
    ], PostDeleteConfigurationTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationTemplateRequest.prototype, "request", void 0);
    return PostDeleteConfigurationTemplateRequest;
}(SpeakeasyBase));
export { PostDeleteConfigurationTemplateRequest };
var PostDeleteConfigurationTemplateResponse = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationTemplateResponse, _super);
    function PostDeleteConfigurationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteConfigurationTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteConfigurationTemplateResponse.prototype, "statusCode", void 0);
    return PostDeleteConfigurationTemplateResponse;
}(SpeakeasyBase));
export { PostDeleteConfigurationTemplateResponse };
