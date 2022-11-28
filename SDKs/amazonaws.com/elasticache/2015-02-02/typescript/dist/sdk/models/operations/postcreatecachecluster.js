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
export var PostCreateCacheClusterActionEnum;
(function (PostCreateCacheClusterActionEnum) {
    PostCreateCacheClusterActionEnum["CreateCacheCluster"] = "CreateCacheCluster";
})(PostCreateCacheClusterActionEnum || (PostCreateCacheClusterActionEnum = {}));
export var PostCreateCacheClusterVersionEnum;
(function (PostCreateCacheClusterVersionEnum) {
    PostCreateCacheClusterVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostCreateCacheClusterVersionEnum || (PostCreateCacheClusterVersionEnum = {}));
var PostCreateCacheClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateCacheClusterQueryParams, _super);
    function PostCreateCacheClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterQueryParams.prototype, "version", void 0);
    return PostCreateCacheClusterQueryParams;
}(SpeakeasyBase));
export { PostCreateCacheClusterQueryParams };
var PostCreateCacheClusterHeaders = /** @class */ (function (_super) {
    __extends(PostCreateCacheClusterHeaders, _super);
    function PostCreateCacheClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateCacheClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateCacheClusterHeaders;
}(SpeakeasyBase));
export { PostCreateCacheClusterHeaders };
var PostCreateCacheClusterRequest = /** @class */ (function (_super) {
    __extends(PostCreateCacheClusterRequest, _super);
    function PostCreateCacheClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCacheClusterQueryParams)
    ], PostCreateCacheClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCacheClusterHeaders)
    ], PostCreateCacheClusterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateCacheClusterRequest.prototype, "request", void 0);
    return PostCreateCacheClusterRequest;
}(SpeakeasyBase));
export { PostCreateCacheClusterRequest };
var PostCreateCacheClusterResponse = /** @class */ (function (_super) {
    __extends(PostCreateCacheClusterResponse, _super);
    function PostCreateCacheClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateCacheClusterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateCacheClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateCacheClusterResponse.prototype, "statusCode", void 0);
    return PostCreateCacheClusterResponse;
}(SpeakeasyBase));
export { PostCreateCacheClusterResponse };
