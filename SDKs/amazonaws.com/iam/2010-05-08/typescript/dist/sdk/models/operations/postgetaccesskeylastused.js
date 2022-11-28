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
export var PostGetAccessKeyLastUsedActionEnum;
(function (PostGetAccessKeyLastUsedActionEnum) {
    PostGetAccessKeyLastUsedActionEnum["GetAccessKeyLastUsed"] = "GetAccessKeyLastUsed";
})(PostGetAccessKeyLastUsedActionEnum || (PostGetAccessKeyLastUsedActionEnum = {}));
export var PostGetAccessKeyLastUsedVersionEnum;
(function (PostGetAccessKeyLastUsedVersionEnum) {
    PostGetAccessKeyLastUsedVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetAccessKeyLastUsedVersionEnum || (PostGetAccessKeyLastUsedVersionEnum = {}));
var PostGetAccessKeyLastUsedQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyLastUsedQueryParams, _super);
    function PostGetAccessKeyLastUsedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedQueryParams.prototype, "version", void 0);
    return PostGetAccessKeyLastUsedQueryParams;
}(SpeakeasyBase));
export { PostGetAccessKeyLastUsedQueryParams };
var PostGetAccessKeyLastUsedHeaders = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyLastUsedHeaders, _super);
    function PostGetAccessKeyLastUsedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAccessKeyLastUsedHeaders;
}(SpeakeasyBase));
export { PostGetAccessKeyLastUsedHeaders };
var PostGetAccessKeyLastUsedRequest = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyLastUsedRequest, _super);
    function PostGetAccessKeyLastUsedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccessKeyLastUsedQueryParams)
    ], PostGetAccessKeyLastUsedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccessKeyLastUsedHeaders)
    ], PostGetAccessKeyLastUsedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetAccessKeyLastUsedRequest.prototype, "request", void 0);
    return PostGetAccessKeyLastUsedRequest;
}(SpeakeasyBase));
export { PostGetAccessKeyLastUsedRequest };
var PostGetAccessKeyLastUsedResponse = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyLastUsedResponse, _super);
    function PostGetAccessKeyLastUsedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAccessKeyLastUsedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetAccessKeyLastUsedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetAccessKeyLastUsedResponse.prototype, "statusCode", void 0);
    return PostGetAccessKeyLastUsedResponse;
}(SpeakeasyBase));
export { PostGetAccessKeyLastUsedResponse };
