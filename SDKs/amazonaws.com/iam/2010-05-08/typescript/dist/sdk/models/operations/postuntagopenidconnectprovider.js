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
export var PostUntagOpenIdConnectProviderActionEnum;
(function (PostUntagOpenIdConnectProviderActionEnum) {
    PostUntagOpenIdConnectProviderActionEnum["UntagOpenIdConnectProvider"] = "UntagOpenIDConnectProvider";
})(PostUntagOpenIdConnectProviderActionEnum || (PostUntagOpenIdConnectProviderActionEnum = {}));
export var PostUntagOpenIdConnectProviderVersionEnum;
(function (PostUntagOpenIdConnectProviderVersionEnum) {
    PostUntagOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUntagOpenIdConnectProviderVersionEnum || (PostUntagOpenIdConnectProviderVersionEnum = {}));
var PostUntagOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagOpenIdConnectProviderQueryParams, _super);
    function PostUntagOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return PostUntagOpenIdConnectProviderQueryParams;
}(SpeakeasyBase));
export { PostUntagOpenIdConnectProviderQueryParams };
var PostUntagOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(PostUntagOpenIdConnectProviderHeaders, _super);
    function PostUntagOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagOpenIdConnectProviderHeaders;
}(SpeakeasyBase));
export { PostUntagOpenIdConnectProviderHeaders };
var PostUntagOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(PostUntagOpenIdConnectProviderRequest, _super);
    function PostUntagOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUntagOpenIdConnectProviderQueryParams)
    ], PostUntagOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUntagOpenIdConnectProviderHeaders)
    ], PostUntagOpenIdConnectProviderRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagOpenIdConnectProviderRequest.prototype, "request", void 0);
    return PostUntagOpenIdConnectProviderRequest;
}(SpeakeasyBase));
export { PostUntagOpenIdConnectProviderRequest };
var PostUntagOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(PostUntagOpenIdConnectProviderResponse, _super);
    function PostUntagOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUntagOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUntagOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUntagOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return PostUntagOpenIdConnectProviderResponse;
}(SpeakeasyBase));
export { PostUntagOpenIdConnectProviderResponse };
