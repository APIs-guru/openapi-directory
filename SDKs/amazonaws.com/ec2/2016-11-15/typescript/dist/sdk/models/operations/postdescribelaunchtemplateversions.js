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
export var PostDescribeLaunchTemplateVersionsActionEnum;
(function (PostDescribeLaunchTemplateVersionsActionEnum) {
    PostDescribeLaunchTemplateVersionsActionEnum["DescribeLaunchTemplateVersions"] = "DescribeLaunchTemplateVersions";
})(PostDescribeLaunchTemplateVersionsActionEnum || (PostDescribeLaunchTemplateVersionsActionEnum = {}));
export var PostDescribeLaunchTemplateVersionsVersionEnum;
(function (PostDescribeLaunchTemplateVersionsVersionEnum) {
    PostDescribeLaunchTemplateVersionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeLaunchTemplateVersionsVersionEnum || (PostDescribeLaunchTemplateVersionsVersionEnum = {}));
var PostDescribeLaunchTemplateVersionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLaunchTemplateVersionsQueryParams, _super);
    function PostDescribeLaunchTemplateVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsQueryParams.prototype, "version", void 0);
    return PostDescribeLaunchTemplateVersionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeLaunchTemplateVersionsQueryParams };
var PostDescribeLaunchTemplateVersionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLaunchTemplateVersionsHeaders, _super);
    function PostDescribeLaunchTemplateVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLaunchTemplateVersionsHeaders;
}(SpeakeasyBase));
export { PostDescribeLaunchTemplateVersionsHeaders };
var PostDescribeLaunchTemplateVersionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLaunchTemplateVersionsRequest, _super);
    function PostDescribeLaunchTemplateVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLaunchTemplateVersionsQueryParams)
    ], PostDescribeLaunchTemplateVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLaunchTemplateVersionsHeaders)
    ], PostDescribeLaunchTemplateVersionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLaunchTemplateVersionsRequest.prototype, "request", void 0);
    return PostDescribeLaunchTemplateVersionsRequest;
}(SpeakeasyBase));
export { PostDescribeLaunchTemplateVersionsRequest };
var PostDescribeLaunchTemplateVersionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLaunchTemplateVersionsResponse, _super);
    function PostDescribeLaunchTemplateVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLaunchTemplateVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeLaunchTemplateVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeLaunchTemplateVersionsResponse.prototype, "statusCode", void 0);
    return PostDescribeLaunchTemplateVersionsResponse;
}(SpeakeasyBase));
export { PostDescribeLaunchTemplateVersionsResponse };
