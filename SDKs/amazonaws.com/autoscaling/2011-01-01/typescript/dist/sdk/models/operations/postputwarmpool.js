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
export var PostPutWarmPoolActionEnum;
(function (PostPutWarmPoolActionEnum) {
    PostPutWarmPoolActionEnum["PutWarmPool"] = "PutWarmPool";
})(PostPutWarmPoolActionEnum || (PostPutWarmPoolActionEnum = {}));
export var PostPutWarmPoolVersionEnum;
(function (PostPutWarmPoolVersionEnum) {
    PostPutWarmPoolVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostPutWarmPoolVersionEnum || (PostPutWarmPoolVersionEnum = {}));
var PostPutWarmPoolQueryParams = /** @class */ (function (_super) {
    __extends(PostPutWarmPoolQueryParams, _super);
    function PostPutWarmPoolQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolQueryParams.prototype, "version", void 0);
    return PostPutWarmPoolQueryParams;
}(SpeakeasyBase));
export { PostPutWarmPoolQueryParams };
var PostPutWarmPoolHeaders = /** @class */ (function (_super) {
    __extends(PostPutWarmPoolHeaders, _super);
    function PostPutWarmPoolHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutWarmPoolHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutWarmPoolHeaders;
}(SpeakeasyBase));
export { PostPutWarmPoolHeaders };
var PostPutWarmPoolRequest = /** @class */ (function (_super) {
    __extends(PostPutWarmPoolRequest, _super);
    function PostPutWarmPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutWarmPoolQueryParams)
    ], PostPutWarmPoolRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPutWarmPoolHeaders)
    ], PostPutWarmPoolRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutWarmPoolRequest.prototype, "request", void 0);
    return PostPutWarmPoolRequest;
}(SpeakeasyBase));
export { PostPutWarmPoolRequest };
var PostPutWarmPoolResponse = /** @class */ (function (_super) {
    __extends(PostPutWarmPoolResponse, _super);
    function PostPutWarmPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPutWarmPoolResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPutWarmPoolResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPutWarmPoolResponse.prototype, "statusCode", void 0);
    return PostPutWarmPoolResponse;
}(SpeakeasyBase));
export { PostPutWarmPoolResponse };
