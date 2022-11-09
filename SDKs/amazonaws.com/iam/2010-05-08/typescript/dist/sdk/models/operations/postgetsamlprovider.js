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
export var PostGetSamlProviderActionEnum;
(function (PostGetSamlProviderActionEnum) {
    PostGetSamlProviderActionEnum["GetSamlProvider"] = "GetSAMLProvider";
})(PostGetSamlProviderActionEnum || (PostGetSamlProviderActionEnum = {}));
export var PostGetSamlProviderVersionEnum;
(function (PostGetSamlProviderVersionEnum) {
    PostGetSamlProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetSamlProviderVersionEnum || (PostGetSamlProviderVersionEnum = {}));
var PostGetSamlProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostGetSamlProviderQueryParams, _super);
    function PostGetSamlProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderQueryParams.prototype, "version", void 0);
    return PostGetSamlProviderQueryParams;
}(SpeakeasyBase));
export { PostGetSamlProviderQueryParams };
var PostGetSamlProviderHeaders = /** @class */ (function (_super) {
    __extends(PostGetSamlProviderHeaders, _super);
    function PostGetSamlProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetSamlProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetSamlProviderHeaders;
}(SpeakeasyBase));
export { PostGetSamlProviderHeaders };
var PostGetSamlProviderRequest = /** @class */ (function (_super) {
    __extends(PostGetSamlProviderRequest, _super);
    function PostGetSamlProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetSamlProviderQueryParams)
    ], PostGetSamlProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetSamlProviderHeaders)
    ], PostGetSamlProviderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetSamlProviderRequest.prototype, "request", void 0);
    return PostGetSamlProviderRequest;
}(SpeakeasyBase));
export { PostGetSamlProviderRequest };
var PostGetSamlProviderResponse = /** @class */ (function (_super) {
    __extends(PostGetSamlProviderResponse, _super);
    function PostGetSamlProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetSamlProviderResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetSamlProviderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetSamlProviderResponse.prototype, "statusCode", void 0);
    return PostGetSamlProviderResponse;
}(SpeakeasyBase));
export { PostGetSamlProviderResponse };
