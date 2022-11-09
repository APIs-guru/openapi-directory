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
export var PostDeleteApplicationActionEnum;
(function (PostDeleteApplicationActionEnum) {
    PostDeleteApplicationActionEnum["DeleteApplication"] = "DeleteApplication";
})(PostDeleteApplicationActionEnum || (PostDeleteApplicationActionEnum = {}));
export var PostDeleteApplicationVersionEnum;
(function (PostDeleteApplicationVersionEnum) {
    PostDeleteApplicationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteApplicationVersionEnum || (PostDeleteApplicationVersionEnum = {}));
var PostDeleteApplicationQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationQueryParams, _super);
    function PostDeleteApplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationQueryParams.prototype, "version", void 0);
    return PostDeleteApplicationQueryParams;
}(SpeakeasyBase));
export { PostDeleteApplicationQueryParams };
var PostDeleteApplicationHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationHeaders, _super);
    function PostDeleteApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteApplicationHeaders;
}(SpeakeasyBase));
export { PostDeleteApplicationHeaders };
var PostDeleteApplicationRequest = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationRequest, _super);
    function PostDeleteApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteApplicationQueryParams)
    ], PostDeleteApplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteApplicationHeaders)
    ], PostDeleteApplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteApplicationRequest.prototype, "request", void 0);
    return PostDeleteApplicationRequest;
}(SpeakeasyBase));
export { PostDeleteApplicationRequest };
var PostDeleteApplicationResponse = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationResponse, _super);
    function PostDeleteApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteApplicationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteApplicationResponse.prototype, "statusCode", void 0);
    return PostDeleteApplicationResponse;
}(SpeakeasyBase));
export { PostDeleteApplicationResponse };
