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
export var PostDescribeFpgaImageAttributeActionEnum;
(function (PostDescribeFpgaImageAttributeActionEnum) {
    PostDescribeFpgaImageAttributeActionEnum["DescribeFpgaImageAttribute"] = "DescribeFpgaImageAttribute";
})(PostDescribeFpgaImageAttributeActionEnum || (PostDescribeFpgaImageAttributeActionEnum = {}));
export var PostDescribeFpgaImageAttributeVersionEnum;
(function (PostDescribeFpgaImageAttributeVersionEnum) {
    PostDescribeFpgaImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeFpgaImageAttributeVersionEnum || (PostDescribeFpgaImageAttributeVersionEnum = {}));
var PostDescribeFpgaImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeFpgaImageAttributeQueryParams, _super);
    function PostDescribeFpgaImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeQueryParams.prototype, "version", void 0);
    return PostDescribeFpgaImageAttributeQueryParams;
}(SpeakeasyBase));
export { PostDescribeFpgaImageAttributeQueryParams };
var PostDescribeFpgaImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeFpgaImageAttributeHeaders, _super);
    function PostDescribeFpgaImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeFpgaImageAttributeHeaders;
}(SpeakeasyBase));
export { PostDescribeFpgaImageAttributeHeaders };
var PostDescribeFpgaImageAttributeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeFpgaImageAttributeRequest, _super);
    function PostDescribeFpgaImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeFpgaImageAttributeQueryParams)
    ], PostDescribeFpgaImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeFpgaImageAttributeHeaders)
    ], PostDescribeFpgaImageAttributeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFpgaImageAttributeRequest.prototype, "request", void 0);
    return PostDescribeFpgaImageAttributeRequest;
}(SpeakeasyBase));
export { PostDescribeFpgaImageAttributeRequest };
var PostDescribeFpgaImageAttributeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeFpgaImageAttributeResponse, _super);
    function PostDescribeFpgaImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFpgaImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeFpgaImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeFpgaImageAttributeResponse.prototype, "statusCode", void 0);
    return PostDescribeFpgaImageAttributeResponse;
}(SpeakeasyBase));
export { PostDescribeFpgaImageAttributeResponse };
