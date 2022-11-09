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
export var PostCreateApplicationVersionActionEnum;
(function (PostCreateApplicationVersionActionEnum) {
    PostCreateApplicationVersionActionEnum["CreateApplicationVersion"] = "CreateApplicationVersion";
})(PostCreateApplicationVersionActionEnum || (PostCreateApplicationVersionActionEnum = {}));
export var PostCreateApplicationVersionVersionEnum;
(function (PostCreateApplicationVersionVersionEnum) {
    PostCreateApplicationVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateApplicationVersionVersionEnum || (PostCreateApplicationVersionVersionEnum = {}));
var PostCreateApplicationVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateApplicationVersionQueryParams, _super);
    function PostCreateApplicationVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionQueryParams.prototype, "version", void 0);
    return PostCreateApplicationVersionQueryParams;
}(SpeakeasyBase));
export { PostCreateApplicationVersionQueryParams };
var PostCreateApplicationVersionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateApplicationVersionHeaders, _super);
    function PostCreateApplicationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateApplicationVersionHeaders;
}(SpeakeasyBase));
export { PostCreateApplicationVersionHeaders };
var PostCreateApplicationVersionRequest = /** @class */ (function (_super) {
    __extends(PostCreateApplicationVersionRequest, _super);
    function PostCreateApplicationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateApplicationVersionQueryParams)
    ], PostCreateApplicationVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateApplicationVersionHeaders)
    ], PostCreateApplicationVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateApplicationVersionRequest.prototype, "request", void 0);
    return PostCreateApplicationVersionRequest;
}(SpeakeasyBase));
export { PostCreateApplicationVersionRequest };
var PostCreateApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(PostCreateApplicationVersionResponse, _super);
    function PostCreateApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateApplicationVersionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateApplicationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateApplicationVersionResponse.prototype, "statusCode", void 0);
    return PostCreateApplicationVersionResponse;
}(SpeakeasyBase));
export { PostCreateApplicationVersionResponse };
