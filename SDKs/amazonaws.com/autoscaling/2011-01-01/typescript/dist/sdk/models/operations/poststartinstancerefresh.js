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
export var PostStartInstanceRefreshActionEnum;
(function (PostStartInstanceRefreshActionEnum) {
    PostStartInstanceRefreshActionEnum["StartInstanceRefresh"] = "StartInstanceRefresh";
})(PostStartInstanceRefreshActionEnum || (PostStartInstanceRefreshActionEnum = {}));
export var PostStartInstanceRefreshVersionEnum;
(function (PostStartInstanceRefreshVersionEnum) {
    PostStartInstanceRefreshVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostStartInstanceRefreshVersionEnum || (PostStartInstanceRefreshVersionEnum = {}));
var PostStartInstanceRefreshQueryParams = /** @class */ (function (_super) {
    __extends(PostStartInstanceRefreshQueryParams, _super);
    function PostStartInstanceRefreshQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshQueryParams.prototype, "version", void 0);
    return PostStartInstanceRefreshQueryParams;
}(SpeakeasyBase));
export { PostStartInstanceRefreshQueryParams };
var PostStartInstanceRefreshHeaders = /** @class */ (function (_super) {
    __extends(PostStartInstanceRefreshHeaders, _super);
    function PostStartInstanceRefreshHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostStartInstanceRefreshHeaders;
}(SpeakeasyBase));
export { PostStartInstanceRefreshHeaders };
var PostStartInstanceRefreshRequest = /** @class */ (function (_super) {
    __extends(PostStartInstanceRefreshRequest, _super);
    function PostStartInstanceRefreshRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostStartInstanceRefreshQueryParams)
    ], PostStartInstanceRefreshRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostStartInstanceRefreshHeaders)
    ], PostStartInstanceRefreshRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostStartInstanceRefreshRequest.prototype, "request", void 0);
    return PostStartInstanceRefreshRequest;
}(SpeakeasyBase));
export { PostStartInstanceRefreshRequest };
var PostStartInstanceRefreshResponse = /** @class */ (function (_super) {
    __extends(PostStartInstanceRefreshResponse, _super);
    function PostStartInstanceRefreshResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostStartInstanceRefreshResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostStartInstanceRefreshResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostStartInstanceRefreshResponse.prototype, "statusCode", void 0);
    return PostStartInstanceRefreshResponse;
}(SpeakeasyBase));
export { PostStartInstanceRefreshResponse };
