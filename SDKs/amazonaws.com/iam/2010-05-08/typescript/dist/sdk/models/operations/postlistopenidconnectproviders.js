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
export var PostListOpenIdConnectProvidersActionEnum;
(function (PostListOpenIdConnectProvidersActionEnum) {
    PostListOpenIdConnectProvidersActionEnum["ListOpenIdConnectProviders"] = "ListOpenIDConnectProviders";
})(PostListOpenIdConnectProvidersActionEnum || (PostListOpenIdConnectProvidersActionEnum = {}));
export var PostListOpenIdConnectProvidersVersionEnum;
(function (PostListOpenIdConnectProvidersVersionEnum) {
    PostListOpenIdConnectProvidersVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListOpenIdConnectProvidersVersionEnum || (PostListOpenIdConnectProvidersVersionEnum = {}));
var PostListOpenIdConnectProvidersQueryParams = /** @class */ (function (_super) {
    __extends(PostListOpenIdConnectProvidersQueryParams, _super);
    function PostListOpenIdConnectProvidersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersQueryParams.prototype, "version", void 0);
    return PostListOpenIdConnectProvidersQueryParams;
}(SpeakeasyBase));
export { PostListOpenIdConnectProvidersQueryParams };
var PostListOpenIdConnectProvidersHeaders = /** @class */ (function (_super) {
    __extends(PostListOpenIdConnectProvidersHeaders, _super);
    function PostListOpenIdConnectProvidersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListOpenIdConnectProvidersHeaders;
}(SpeakeasyBase));
export { PostListOpenIdConnectProvidersHeaders };
var PostListOpenIdConnectProvidersRequest = /** @class */ (function (_super) {
    __extends(PostListOpenIdConnectProvidersRequest, _super);
    function PostListOpenIdConnectProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListOpenIdConnectProvidersQueryParams)
    ], PostListOpenIdConnectProvidersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListOpenIdConnectProvidersHeaders)
    ], PostListOpenIdConnectProvidersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListOpenIdConnectProvidersRequest.prototype, "request", void 0);
    return PostListOpenIdConnectProvidersRequest;
}(SpeakeasyBase));
export { PostListOpenIdConnectProvidersRequest };
var PostListOpenIdConnectProvidersResponse = /** @class */ (function (_super) {
    __extends(PostListOpenIdConnectProvidersResponse, _super);
    function PostListOpenIdConnectProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListOpenIdConnectProvidersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListOpenIdConnectProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListOpenIdConnectProvidersResponse.prototype, "statusCode", void 0);
    return PostListOpenIdConnectProvidersResponse;
}(SpeakeasyBase));
export { PostListOpenIdConnectProvidersResponse };
