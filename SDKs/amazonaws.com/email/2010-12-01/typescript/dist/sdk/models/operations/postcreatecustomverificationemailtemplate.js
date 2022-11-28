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
export var PostCreateCustomVerificationEmailTemplateActionEnum;
(function (PostCreateCustomVerificationEmailTemplateActionEnum) {
    PostCreateCustomVerificationEmailTemplateActionEnum["CreateCustomVerificationEmailTemplate"] = "CreateCustomVerificationEmailTemplate";
})(PostCreateCustomVerificationEmailTemplateActionEnum || (PostCreateCustomVerificationEmailTemplateActionEnum = {}));
export var PostCreateCustomVerificationEmailTemplateVersionEnum;
(function (PostCreateCustomVerificationEmailTemplateVersionEnum) {
    PostCreateCustomVerificationEmailTemplateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateCustomVerificationEmailTemplateVersionEnum || (PostCreateCustomVerificationEmailTemplateVersionEnum = {}));
var PostCreateCustomVerificationEmailTemplateQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateCustomVerificationEmailTemplateQueryParams, _super);
    function PostCreateCustomVerificationEmailTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateQueryParams.prototype, "version", void 0);
    return PostCreateCustomVerificationEmailTemplateQueryParams;
}(SpeakeasyBase));
export { PostCreateCustomVerificationEmailTemplateQueryParams };
var PostCreateCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(PostCreateCustomVerificationEmailTemplateHeaders, _super);
    function PostCreateCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { PostCreateCustomVerificationEmailTemplateHeaders };
var PostCreateCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(PostCreateCustomVerificationEmailTemplateRequest, _super);
    function PostCreateCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCustomVerificationEmailTemplateQueryParams)
    ], PostCreateCustomVerificationEmailTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCustomVerificationEmailTemplateHeaders)
    ], PostCreateCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateCustomVerificationEmailTemplateRequest.prototype, "request", void 0);
    return PostCreateCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { PostCreateCustomVerificationEmailTemplateRequest };
var PostCreateCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(PostCreateCustomVerificationEmailTemplateResponse, _super);
    function PostCreateCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateCustomVerificationEmailTemplateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    return PostCreateCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { PostCreateCustomVerificationEmailTemplateResponse };
