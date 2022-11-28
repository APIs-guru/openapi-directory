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
export var PostListVirtualMfaDevicesActionEnum;
(function (PostListVirtualMfaDevicesActionEnum) {
    PostListVirtualMfaDevicesActionEnum["ListVirtualMfaDevices"] = "ListVirtualMFADevices";
})(PostListVirtualMfaDevicesActionEnum || (PostListVirtualMfaDevicesActionEnum = {}));
export var PostListVirtualMfaDevicesVersionEnum;
(function (PostListVirtualMfaDevicesVersionEnum) {
    PostListVirtualMfaDevicesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListVirtualMfaDevicesVersionEnum || (PostListVirtualMfaDevicesVersionEnum = {}));
var PostListVirtualMfaDevicesQueryParams = /** @class */ (function (_super) {
    __extends(PostListVirtualMfaDevicesQueryParams, _super);
    function PostListVirtualMfaDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesQueryParams.prototype, "version", void 0);
    return PostListVirtualMfaDevicesQueryParams;
}(SpeakeasyBase));
export { PostListVirtualMfaDevicesQueryParams };
var PostListVirtualMfaDevicesHeaders = /** @class */ (function (_super) {
    __extends(PostListVirtualMfaDevicesHeaders, _super);
    function PostListVirtualMfaDevicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListVirtualMfaDevicesHeaders;
}(SpeakeasyBase));
export { PostListVirtualMfaDevicesHeaders };
var PostListVirtualMfaDevicesRequest = /** @class */ (function (_super) {
    __extends(PostListVirtualMfaDevicesRequest, _super);
    function PostListVirtualMfaDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListVirtualMfaDevicesQueryParams)
    ], PostListVirtualMfaDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListVirtualMfaDevicesHeaders)
    ], PostListVirtualMfaDevicesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListVirtualMfaDevicesRequest.prototype, "request", void 0);
    return PostListVirtualMfaDevicesRequest;
}(SpeakeasyBase));
export { PostListVirtualMfaDevicesRequest };
var PostListVirtualMfaDevicesResponse = /** @class */ (function (_super) {
    __extends(PostListVirtualMfaDevicesResponse, _super);
    function PostListVirtualMfaDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListVirtualMfaDevicesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListVirtualMfaDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListVirtualMfaDevicesResponse.prototype, "statusCode", void 0);
    return PostListVirtualMfaDevicesResponse;
}(SpeakeasyBase));
export { PostListVirtualMfaDevicesResponse };
