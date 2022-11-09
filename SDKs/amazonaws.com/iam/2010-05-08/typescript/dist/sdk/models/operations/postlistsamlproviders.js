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
export var PostListSamlProvidersActionEnum;
(function (PostListSamlProvidersActionEnum) {
    PostListSamlProvidersActionEnum["ListSamlProviders"] = "ListSAMLProviders";
})(PostListSamlProvidersActionEnum || (PostListSamlProvidersActionEnum = {}));
export var PostListSamlProvidersVersionEnum;
(function (PostListSamlProvidersVersionEnum) {
    PostListSamlProvidersVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListSamlProvidersVersionEnum || (PostListSamlProvidersVersionEnum = {}));
var PostListSamlProvidersQueryParams = /** @class */ (function (_super) {
    __extends(PostListSamlProvidersQueryParams, _super);
    function PostListSamlProvidersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersQueryParams.prototype, "version", void 0);
    return PostListSamlProvidersQueryParams;
}(SpeakeasyBase));
export { PostListSamlProvidersQueryParams };
var PostListSamlProvidersHeaders = /** @class */ (function (_super) {
    __extends(PostListSamlProvidersHeaders, _super);
    function PostListSamlProvidersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListSamlProvidersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListSamlProvidersHeaders;
}(SpeakeasyBase));
export { PostListSamlProvidersHeaders };
var PostListSamlProvidersRequest = /** @class */ (function (_super) {
    __extends(PostListSamlProvidersRequest, _super);
    function PostListSamlProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostListSamlProvidersQueryParams)
    ], PostListSamlProvidersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostListSamlProvidersHeaders)
    ], PostListSamlProvidersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListSamlProvidersRequest.prototype, "request", void 0);
    return PostListSamlProvidersRequest;
}(SpeakeasyBase));
export { PostListSamlProvidersRequest };
var PostListSamlProvidersResponse = /** @class */ (function (_super) {
    __extends(PostListSamlProvidersResponse, _super);
    function PostListSamlProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostListSamlProvidersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostListSamlProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostListSamlProvidersResponse.prototype, "statusCode", void 0);
    return PostListSamlProvidersResponse;
}(SpeakeasyBase));
export { PostListSamlProvidersResponse };
