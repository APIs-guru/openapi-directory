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
export var PostDescribeCacheParametersActionEnum;
(function (PostDescribeCacheParametersActionEnum) {
    PostDescribeCacheParametersActionEnum["DescribeCacheParameters"] = "DescribeCacheParameters";
})(PostDescribeCacheParametersActionEnum || (PostDescribeCacheParametersActionEnum = {}));
export var PostDescribeCacheParametersVersionEnum;
(function (PostDescribeCacheParametersVersionEnum) {
    PostDescribeCacheParametersVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeCacheParametersVersionEnum || (PostDescribeCacheParametersVersionEnum = {}));
var PostDescribeCacheParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeCacheParametersQueryParams, _super);
    function PostDescribeCacheParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersQueryParams.prototype, "version", void 0);
    return PostDescribeCacheParametersQueryParams;
}(SpeakeasyBase));
export { PostDescribeCacheParametersQueryParams };
var PostDescribeCacheParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeCacheParametersHeaders, _super);
    function PostDescribeCacheParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeCacheParametersHeaders;
}(SpeakeasyBase));
export { PostDescribeCacheParametersHeaders };
var PostDescribeCacheParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeCacheParametersRequest, _super);
    function PostDescribeCacheParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheParametersQueryParams)
    ], PostDescribeCacheParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheParametersHeaders)
    ], PostDescribeCacheParametersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheParametersRequest.prototype, "request", void 0);
    return PostDescribeCacheParametersRequest;
}(SpeakeasyBase));
export { PostDescribeCacheParametersRequest };
var PostDescribeCacheParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeCacheParametersResponse, _super);
    function PostDescribeCacheParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheParametersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeCacheParametersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeCacheParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeCacheParametersResponse;
}(SpeakeasyBase));
export { PostDescribeCacheParametersResponse };
