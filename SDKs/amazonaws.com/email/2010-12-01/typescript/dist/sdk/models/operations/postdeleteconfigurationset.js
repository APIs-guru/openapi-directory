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
export var PostDeleteConfigurationSetActionEnum;
(function (PostDeleteConfigurationSetActionEnum) {
    PostDeleteConfigurationSetActionEnum["DeleteConfigurationSet"] = "DeleteConfigurationSet";
})(PostDeleteConfigurationSetActionEnum || (PostDeleteConfigurationSetActionEnum = {}));
export var PostDeleteConfigurationSetVersionEnum;
(function (PostDeleteConfigurationSetVersionEnum) {
    PostDeleteConfigurationSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteConfigurationSetVersionEnum || (PostDeleteConfigurationSetVersionEnum = {}));
var PostDeleteConfigurationSetQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetQueryParams, _super);
    function PostDeleteConfigurationSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetQueryParams.prototype, "version", void 0);
    return PostDeleteConfigurationSetQueryParams;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetQueryParams };
var PostDeleteConfigurationSetHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetHeaders, _super);
    function PostDeleteConfigurationSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteConfigurationSetHeaders;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetHeaders };
var PostDeleteConfigurationSetRequest = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetRequest, _super);
    function PostDeleteConfigurationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetQueryParams)
    ], PostDeleteConfigurationSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetHeaders)
    ], PostDeleteConfigurationSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetRequest.prototype, "request", void 0);
    return PostDeleteConfigurationSetRequest;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetRequest };
var PostDeleteConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetResponse, _super);
    function PostDeleteConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteConfigurationSetResponse.prototype, "statusCode", void 0);
    return PostDeleteConfigurationSetResponse;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetResponse };
