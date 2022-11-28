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
export var PostTagOpenIdConnectProviderActionEnum;
(function (PostTagOpenIdConnectProviderActionEnum) {
    PostTagOpenIdConnectProviderActionEnum["TagOpenIdConnectProvider"] = "TagOpenIDConnectProvider";
})(PostTagOpenIdConnectProviderActionEnum || (PostTagOpenIdConnectProviderActionEnum = {}));
export var PostTagOpenIdConnectProviderVersionEnum;
(function (PostTagOpenIdConnectProviderVersionEnum) {
    PostTagOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostTagOpenIdConnectProviderVersionEnum || (PostTagOpenIdConnectProviderVersionEnum = {}));
var PostTagOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostTagOpenIdConnectProviderQueryParams, _super);
    function PostTagOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return PostTagOpenIdConnectProviderQueryParams;
}(SpeakeasyBase));
export { PostTagOpenIdConnectProviderQueryParams };
var PostTagOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(PostTagOpenIdConnectProviderHeaders, _super);
    function PostTagOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostTagOpenIdConnectProviderHeaders;
}(SpeakeasyBase));
export { PostTagOpenIdConnectProviderHeaders };
var PostTagOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(PostTagOpenIdConnectProviderRequest, _super);
    function PostTagOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTagOpenIdConnectProviderQueryParams)
    ], PostTagOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTagOpenIdConnectProviderHeaders)
    ], PostTagOpenIdConnectProviderRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTagOpenIdConnectProviderRequest.prototype, "request", void 0);
    return PostTagOpenIdConnectProviderRequest;
}(SpeakeasyBase));
export { PostTagOpenIdConnectProviderRequest };
var PostTagOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(PostTagOpenIdConnectProviderResponse, _super);
    function PostTagOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTagOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTagOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTagOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return PostTagOpenIdConnectProviderResponse;
}(SpeakeasyBase));
export { PostTagOpenIdConnectProviderResponse };
