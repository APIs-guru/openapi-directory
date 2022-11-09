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
export var PostDeleteAccountAliasActionEnum;
(function (PostDeleteAccountAliasActionEnum) {
    PostDeleteAccountAliasActionEnum["DeleteAccountAlias"] = "DeleteAccountAlias";
})(PostDeleteAccountAliasActionEnum || (PostDeleteAccountAliasActionEnum = {}));
export var PostDeleteAccountAliasVersionEnum;
(function (PostDeleteAccountAliasVersionEnum) {
    PostDeleteAccountAliasVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteAccountAliasVersionEnum || (PostDeleteAccountAliasVersionEnum = {}));
var PostDeleteAccountAliasQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteAccountAliasQueryParams, _super);
    function PostDeleteAccountAliasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasQueryParams.prototype, "version", void 0);
    return PostDeleteAccountAliasQueryParams;
}(SpeakeasyBase));
export { PostDeleteAccountAliasQueryParams };
var PostDeleteAccountAliasHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteAccountAliasHeaders, _super);
    function PostDeleteAccountAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteAccountAliasHeaders;
}(SpeakeasyBase));
export { PostDeleteAccountAliasHeaders };
var PostDeleteAccountAliasRequest = /** @class */ (function (_super) {
    __extends(PostDeleteAccountAliasRequest, _super);
    function PostDeleteAccountAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAccountAliasQueryParams)
    ], PostDeleteAccountAliasRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAccountAliasHeaders)
    ], PostDeleteAccountAliasRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAccountAliasRequest.prototype, "request", void 0);
    return PostDeleteAccountAliasRequest;
}(SpeakeasyBase));
export { PostDeleteAccountAliasRequest };
var PostDeleteAccountAliasResponse = /** @class */ (function (_super) {
    __extends(PostDeleteAccountAliasResponse, _super);
    function PostDeleteAccountAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAccountAliasResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteAccountAliasResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteAccountAliasResponse.prototype, "statusCode", void 0);
    return PostDeleteAccountAliasResponse;
}(SpeakeasyBase));
export { PostDeleteAccountAliasResponse };
