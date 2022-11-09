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
export var PostDeleteVirtualMfaDeviceActionEnum;
(function (PostDeleteVirtualMfaDeviceActionEnum) {
    PostDeleteVirtualMfaDeviceActionEnum["DeleteVirtualMfaDevice"] = "DeleteVirtualMFADevice";
})(PostDeleteVirtualMfaDeviceActionEnum || (PostDeleteVirtualMfaDeviceActionEnum = {}));
export var PostDeleteVirtualMfaDeviceVersionEnum;
(function (PostDeleteVirtualMfaDeviceVersionEnum) {
    PostDeleteVirtualMfaDeviceVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteVirtualMfaDeviceVersionEnum || (PostDeleteVirtualMfaDeviceVersionEnum = {}));
var PostDeleteVirtualMfaDeviceQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteVirtualMfaDeviceQueryParams, _super);
    function PostDeleteVirtualMfaDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceQueryParams.prototype, "version", void 0);
    return PostDeleteVirtualMfaDeviceQueryParams;
}(SpeakeasyBase));
export { PostDeleteVirtualMfaDeviceQueryParams };
var PostDeleteVirtualMfaDeviceHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteVirtualMfaDeviceHeaders, _super);
    function PostDeleteVirtualMfaDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteVirtualMfaDeviceHeaders;
}(SpeakeasyBase));
export { PostDeleteVirtualMfaDeviceHeaders };
var PostDeleteVirtualMfaDeviceRequest = /** @class */ (function (_super) {
    __extends(PostDeleteVirtualMfaDeviceRequest, _super);
    function PostDeleteVirtualMfaDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteVirtualMfaDeviceQueryParams)
    ], PostDeleteVirtualMfaDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteVirtualMfaDeviceHeaders)
    ], PostDeleteVirtualMfaDeviceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVirtualMfaDeviceRequest.prototype, "request", void 0);
    return PostDeleteVirtualMfaDeviceRequest;
}(SpeakeasyBase));
export { PostDeleteVirtualMfaDeviceRequest };
var PostDeleteVirtualMfaDeviceResponse = /** @class */ (function (_super) {
    __extends(PostDeleteVirtualMfaDeviceResponse, _super);
    function PostDeleteVirtualMfaDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVirtualMfaDeviceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteVirtualMfaDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteVirtualMfaDeviceResponse.prototype, "statusCode", void 0);
    return PostDeleteVirtualMfaDeviceResponse;
}(SpeakeasyBase));
export { PostDeleteVirtualMfaDeviceResponse };
