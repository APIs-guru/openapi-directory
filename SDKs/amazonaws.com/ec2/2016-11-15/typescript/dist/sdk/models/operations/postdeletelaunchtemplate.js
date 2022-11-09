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
export var PostDeleteLaunchTemplateActionEnum;
(function (PostDeleteLaunchTemplateActionEnum) {
    PostDeleteLaunchTemplateActionEnum["DeleteLaunchTemplate"] = "DeleteLaunchTemplate";
})(PostDeleteLaunchTemplateActionEnum || (PostDeleteLaunchTemplateActionEnum = {}));
export var PostDeleteLaunchTemplateVersionEnum;
(function (PostDeleteLaunchTemplateVersionEnum) {
    PostDeleteLaunchTemplateVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteLaunchTemplateVersionEnum || (PostDeleteLaunchTemplateVersionEnum = {}));
var PostDeleteLaunchTemplateQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteLaunchTemplateQueryParams, _super);
    function PostDeleteLaunchTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateQueryParams.prototype, "version", void 0);
    return PostDeleteLaunchTemplateQueryParams;
}(SpeakeasyBase));
export { PostDeleteLaunchTemplateQueryParams };
var PostDeleteLaunchTemplateHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteLaunchTemplateHeaders, _super);
    function PostDeleteLaunchTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteLaunchTemplateHeaders;
}(SpeakeasyBase));
export { PostDeleteLaunchTemplateHeaders };
var PostDeleteLaunchTemplateRequest = /** @class */ (function (_super) {
    __extends(PostDeleteLaunchTemplateRequest, _super);
    function PostDeleteLaunchTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteLaunchTemplateQueryParams)
    ], PostDeleteLaunchTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteLaunchTemplateHeaders)
    ], PostDeleteLaunchTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteLaunchTemplateRequest.prototype, "request", void 0);
    return PostDeleteLaunchTemplateRequest;
}(SpeakeasyBase));
export { PostDeleteLaunchTemplateRequest };
var PostDeleteLaunchTemplateResponse = /** @class */ (function (_super) {
    __extends(PostDeleteLaunchTemplateResponse, _super);
    function PostDeleteLaunchTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteLaunchTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteLaunchTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteLaunchTemplateResponse.prototype, "statusCode", void 0);
    return PostDeleteLaunchTemplateResponse;
}(SpeakeasyBase));
export { PostDeleteLaunchTemplateResponse };
