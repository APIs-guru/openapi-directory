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
export var PostAddClientIdToOpenIdConnectProviderActionEnum;
(function (PostAddClientIdToOpenIdConnectProviderActionEnum) {
    PostAddClientIdToOpenIdConnectProviderActionEnum["AddClientIdToOpenIdConnectProvider"] = "AddClientIDToOpenIDConnectProvider";
})(PostAddClientIdToOpenIdConnectProviderActionEnum || (PostAddClientIdToOpenIdConnectProviderActionEnum = {}));
export var PostAddClientIdToOpenIdConnectProviderVersionEnum;
(function (PostAddClientIdToOpenIdConnectProviderVersionEnum) {
    PostAddClientIdToOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostAddClientIdToOpenIdConnectProviderVersionEnum || (PostAddClientIdToOpenIdConnectProviderVersionEnum = {}));
var PostAddClientIdToOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostAddClientIdToOpenIdConnectProviderQueryParams, _super);
    function PostAddClientIdToOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return PostAddClientIdToOpenIdConnectProviderQueryParams;
}(SpeakeasyBase));
export { PostAddClientIdToOpenIdConnectProviderQueryParams };
var PostAddClientIdToOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(PostAddClientIdToOpenIdConnectProviderHeaders, _super);
    function PostAddClientIdToOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAddClientIdToOpenIdConnectProviderHeaders;
}(SpeakeasyBase));
export { PostAddClientIdToOpenIdConnectProviderHeaders };
var PostAddClientIdToOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(PostAddClientIdToOpenIdConnectProviderRequest, _super);
    function PostAddClientIdToOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAddClientIdToOpenIdConnectProviderQueryParams)
    ], PostAddClientIdToOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAddClientIdToOpenIdConnectProviderHeaders)
    ], PostAddClientIdToOpenIdConnectProviderRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAddClientIdToOpenIdConnectProviderRequest.prototype, "request", void 0);
    return PostAddClientIdToOpenIdConnectProviderRequest;
}(SpeakeasyBase));
export { PostAddClientIdToOpenIdConnectProviderRequest };
var PostAddClientIdToOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(PostAddClientIdToOpenIdConnectProviderResponse, _super);
    function PostAddClientIdToOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAddClientIdToOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAddClientIdToOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAddClientIdToOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return PostAddClientIdToOpenIdConnectProviderResponse;
}(SpeakeasyBase));
export { PostAddClientIdToOpenIdConnectProviderResponse };
