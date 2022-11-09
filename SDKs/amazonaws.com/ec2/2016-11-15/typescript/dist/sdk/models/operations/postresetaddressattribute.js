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
export var PostResetAddressAttributeActionEnum;
(function (PostResetAddressAttributeActionEnum) {
    PostResetAddressAttributeActionEnum["ResetAddressAttribute"] = "ResetAddressAttribute";
})(PostResetAddressAttributeActionEnum || (PostResetAddressAttributeActionEnum = {}));
export var PostResetAddressAttributeVersionEnum;
(function (PostResetAddressAttributeVersionEnum) {
    PostResetAddressAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostResetAddressAttributeVersionEnum || (PostResetAddressAttributeVersionEnum = {}));
var PostResetAddressAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostResetAddressAttributeQueryParams, _super);
    function PostResetAddressAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeQueryParams.prototype, "version", void 0);
    return PostResetAddressAttributeQueryParams;
}(SpeakeasyBase));
export { PostResetAddressAttributeQueryParams };
var PostResetAddressAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostResetAddressAttributeHeaders, _super);
    function PostResetAddressAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostResetAddressAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostResetAddressAttributeHeaders;
}(SpeakeasyBase));
export { PostResetAddressAttributeHeaders };
var PostResetAddressAttributeRequest = /** @class */ (function (_super) {
    __extends(PostResetAddressAttributeRequest, _super);
    function PostResetAddressAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetAddressAttributeQueryParams)
    ], PostResetAddressAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetAddressAttributeHeaders)
    ], PostResetAddressAttributeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostResetAddressAttributeRequest.prototype, "request", void 0);
    return PostResetAddressAttributeRequest;
}(SpeakeasyBase));
export { PostResetAddressAttributeRequest };
var PostResetAddressAttributeResponse = /** @class */ (function (_super) {
    __extends(PostResetAddressAttributeResponse, _super);
    function PostResetAddressAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostResetAddressAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostResetAddressAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostResetAddressAttributeResponse.prototype, "statusCode", void 0);
    return PostResetAddressAttributeResponse;
}(SpeakeasyBase));
export { PostResetAddressAttributeResponse };
