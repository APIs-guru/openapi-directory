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
export var PostDeleteApplicationVersionActionEnum;
(function (PostDeleteApplicationVersionActionEnum) {
    PostDeleteApplicationVersionActionEnum["DeleteApplicationVersion"] = "DeleteApplicationVersion";
})(PostDeleteApplicationVersionActionEnum || (PostDeleteApplicationVersionActionEnum = {}));
export var PostDeleteApplicationVersionVersionEnum;
(function (PostDeleteApplicationVersionVersionEnum) {
    PostDeleteApplicationVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteApplicationVersionVersionEnum || (PostDeleteApplicationVersionVersionEnum = {}));
var PostDeleteApplicationVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationVersionQueryParams, _super);
    function PostDeleteApplicationVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionQueryParams.prototype, "version", void 0);
    return PostDeleteApplicationVersionQueryParams;
}(SpeakeasyBase));
export { PostDeleteApplicationVersionQueryParams };
var PostDeleteApplicationVersionHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationVersionHeaders, _super);
    function PostDeleteApplicationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteApplicationVersionHeaders;
}(SpeakeasyBase));
export { PostDeleteApplicationVersionHeaders };
var PostDeleteApplicationVersionRequest = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationVersionRequest, _super);
    function PostDeleteApplicationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteApplicationVersionQueryParams)
    ], PostDeleteApplicationVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteApplicationVersionHeaders)
    ], PostDeleteApplicationVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteApplicationVersionRequest.prototype, "request", void 0);
    return PostDeleteApplicationVersionRequest;
}(SpeakeasyBase));
export { PostDeleteApplicationVersionRequest };
var PostDeleteApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(PostDeleteApplicationVersionResponse, _super);
    function PostDeleteApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteApplicationVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteApplicationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteApplicationVersionResponse.prototype, "statusCode", void 0);
    return PostDeleteApplicationVersionResponse;
}(SpeakeasyBase));
export { PostDeleteApplicationVersionResponse };
