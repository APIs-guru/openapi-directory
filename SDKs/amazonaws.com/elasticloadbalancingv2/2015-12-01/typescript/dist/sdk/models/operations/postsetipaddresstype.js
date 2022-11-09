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
export var PostSetIpAddressTypeActionEnum;
(function (PostSetIpAddressTypeActionEnum) {
    PostSetIpAddressTypeActionEnum["SetIpAddressType"] = "SetIpAddressType";
})(PostSetIpAddressTypeActionEnum || (PostSetIpAddressTypeActionEnum = {}));
export var PostSetIpAddressTypeVersionEnum;
(function (PostSetIpAddressTypeVersionEnum) {
    PostSetIpAddressTypeVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostSetIpAddressTypeVersionEnum || (PostSetIpAddressTypeVersionEnum = {}));
var PostSetIpAddressTypeQueryParams = /** @class */ (function (_super) {
    __extends(PostSetIpAddressTypeQueryParams, _super);
    function PostSetIpAddressTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeQueryParams.prototype, "version", void 0);
    return PostSetIpAddressTypeQueryParams;
}(SpeakeasyBase));
export { PostSetIpAddressTypeQueryParams };
var PostSetIpAddressTypeHeaders = /** @class */ (function (_super) {
    __extends(PostSetIpAddressTypeHeaders, _super);
    function PostSetIpAddressTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetIpAddressTypeHeaders;
}(SpeakeasyBase));
export { PostSetIpAddressTypeHeaders };
var PostSetIpAddressTypeRequest = /** @class */ (function (_super) {
    __extends(PostSetIpAddressTypeRequest, _super);
    function PostSetIpAddressTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostSetIpAddressTypeQueryParams)
    ], PostSetIpAddressTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostSetIpAddressTypeHeaders)
    ], PostSetIpAddressTypeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetIpAddressTypeRequest.prototype, "request", void 0);
    return PostSetIpAddressTypeRequest;
}(SpeakeasyBase));
export { PostSetIpAddressTypeRequest };
var PostSetIpAddressTypeResponse = /** @class */ (function (_super) {
    __extends(PostSetIpAddressTypeResponse, _super);
    function PostSetIpAddressTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetIpAddressTypeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostSetIpAddressTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostSetIpAddressTypeResponse.prototype, "statusCode", void 0);
    return PostSetIpAddressTypeResponse;
}(SpeakeasyBase));
export { PostSetIpAddressTypeResponse };
