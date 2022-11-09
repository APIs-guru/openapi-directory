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
export var PostDescribeServiceUpdatesActionEnum;
(function (PostDescribeServiceUpdatesActionEnum) {
    PostDescribeServiceUpdatesActionEnum["DescribeServiceUpdates"] = "DescribeServiceUpdates";
})(PostDescribeServiceUpdatesActionEnum || (PostDescribeServiceUpdatesActionEnum = {}));
export var PostDescribeServiceUpdatesVersionEnum;
(function (PostDescribeServiceUpdatesVersionEnum) {
    PostDescribeServiceUpdatesVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeServiceUpdatesVersionEnum || (PostDescribeServiceUpdatesVersionEnum = {}));
var PostDescribeServiceUpdatesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeServiceUpdatesQueryParams, _super);
    function PostDescribeServiceUpdatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesQueryParams.prototype, "version", void 0);
    return PostDescribeServiceUpdatesQueryParams;
}(SpeakeasyBase));
export { PostDescribeServiceUpdatesQueryParams };
var PostDescribeServiceUpdatesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeServiceUpdatesHeaders, _super);
    function PostDescribeServiceUpdatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeServiceUpdatesHeaders;
}(SpeakeasyBase));
export { PostDescribeServiceUpdatesHeaders };
var PostDescribeServiceUpdatesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeServiceUpdatesRequest, _super);
    function PostDescribeServiceUpdatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeServiceUpdatesQueryParams)
    ], PostDescribeServiceUpdatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeServiceUpdatesHeaders)
    ], PostDescribeServiceUpdatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeServiceUpdatesRequest.prototype, "request", void 0);
    return PostDescribeServiceUpdatesRequest;
}(SpeakeasyBase));
export { PostDescribeServiceUpdatesRequest };
var PostDescribeServiceUpdatesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeServiceUpdatesResponse, _super);
    function PostDescribeServiceUpdatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeServiceUpdatesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeServiceUpdatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeServiceUpdatesResponse.prototype, "statusCode", void 0);
    return PostDescribeServiceUpdatesResponse;
}(SpeakeasyBase));
export { PostDescribeServiceUpdatesResponse };
