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
export var PostRegisterImageActionEnum;
(function (PostRegisterImageActionEnum) {
    PostRegisterImageActionEnum["RegisterImage"] = "RegisterImage";
})(PostRegisterImageActionEnum || (PostRegisterImageActionEnum = {}));
export var PostRegisterImageVersionEnum;
(function (PostRegisterImageVersionEnum) {
    PostRegisterImageVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostRegisterImageVersionEnum || (PostRegisterImageVersionEnum = {}));
var PostRegisterImageQueryParams = /** @class */ (function (_super) {
    __extends(PostRegisterImageQueryParams, _super);
    function PostRegisterImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRegisterImageQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRegisterImageQueryParams.prototype, "version", void 0);
    return PostRegisterImageQueryParams;
}(SpeakeasyBase));
export { PostRegisterImageQueryParams };
var PostRegisterImageHeaders = /** @class */ (function (_super) {
    __extends(PostRegisterImageHeaders, _super);
    function PostRegisterImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRegisterImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRegisterImageHeaders;
}(SpeakeasyBase));
export { PostRegisterImageHeaders };
var PostRegisterImageRequest = /** @class */ (function (_super) {
    __extends(PostRegisterImageRequest, _super);
    function PostRegisterImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterImageQueryParams)
    ], PostRegisterImageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterImageHeaders)
    ], PostRegisterImageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRegisterImageRequest.prototype, "request", void 0);
    return PostRegisterImageRequest;
}(SpeakeasyBase));
export { PostRegisterImageRequest };
var PostRegisterImageResponse = /** @class */ (function (_super) {
    __extends(PostRegisterImageResponse, _super);
    function PostRegisterImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRegisterImageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRegisterImageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRegisterImageResponse.prototype, "statusCode", void 0);
    return PostRegisterImageResponse;
}(SpeakeasyBase));
export { PostRegisterImageResponse };
