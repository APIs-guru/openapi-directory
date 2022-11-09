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
export var PostUpdateApplicationVersionActionEnum;
(function (PostUpdateApplicationVersionActionEnum) {
    PostUpdateApplicationVersionActionEnum["UpdateApplicationVersion"] = "UpdateApplicationVersion";
})(PostUpdateApplicationVersionActionEnum || (PostUpdateApplicationVersionActionEnum = {}));
export var PostUpdateApplicationVersionVersionEnum;
(function (PostUpdateApplicationVersionVersionEnum) {
    PostUpdateApplicationVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostUpdateApplicationVersionVersionEnum || (PostUpdateApplicationVersionVersionEnum = {}));
var PostUpdateApplicationVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateApplicationVersionQueryParams, _super);
    function PostUpdateApplicationVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionQueryParams.prototype, "version", void 0);
    return PostUpdateApplicationVersionQueryParams;
}(SpeakeasyBase));
export { PostUpdateApplicationVersionQueryParams };
var PostUpdateApplicationVersionHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateApplicationVersionHeaders, _super);
    function PostUpdateApplicationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateApplicationVersionHeaders;
}(SpeakeasyBase));
export { PostUpdateApplicationVersionHeaders };
var PostUpdateApplicationVersionRequest = /** @class */ (function (_super) {
    __extends(PostUpdateApplicationVersionRequest, _super);
    function PostUpdateApplicationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateApplicationVersionQueryParams)
    ], PostUpdateApplicationVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateApplicationVersionHeaders)
    ], PostUpdateApplicationVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateApplicationVersionRequest.prototype, "request", void 0);
    return PostUpdateApplicationVersionRequest;
}(SpeakeasyBase));
export { PostUpdateApplicationVersionRequest };
var PostUpdateApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(PostUpdateApplicationVersionResponse, _super);
    function PostUpdateApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateApplicationVersionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateApplicationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateApplicationVersionResponse.prototype, "statusCode", void 0);
    return PostUpdateApplicationVersionResponse;
}(SpeakeasyBase));
export { PostUpdateApplicationVersionResponse };
