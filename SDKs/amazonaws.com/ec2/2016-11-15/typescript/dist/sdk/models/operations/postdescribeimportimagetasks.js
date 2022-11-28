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
export var PostDescribeImportImageTasksActionEnum;
(function (PostDescribeImportImageTasksActionEnum) {
    PostDescribeImportImageTasksActionEnum["DescribeImportImageTasks"] = "DescribeImportImageTasks";
})(PostDescribeImportImageTasksActionEnum || (PostDescribeImportImageTasksActionEnum = {}));
export var PostDescribeImportImageTasksVersionEnum;
(function (PostDescribeImportImageTasksVersionEnum) {
    PostDescribeImportImageTasksVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeImportImageTasksVersionEnum || (PostDescribeImportImageTasksVersionEnum = {}));
var PostDescribeImportImageTasksQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeImportImageTasksQueryParams, _super);
    function PostDescribeImportImageTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksQueryParams.prototype, "version", void 0);
    return PostDescribeImportImageTasksQueryParams;
}(SpeakeasyBase));
export { PostDescribeImportImageTasksQueryParams };
var PostDescribeImportImageTasksHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeImportImageTasksHeaders, _super);
    function PostDescribeImportImageTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeImportImageTasksHeaders;
}(SpeakeasyBase));
export { PostDescribeImportImageTasksHeaders };
var PostDescribeImportImageTasksRequest = /** @class */ (function (_super) {
    __extends(PostDescribeImportImageTasksRequest, _super);
    function PostDescribeImportImageTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeImportImageTasksQueryParams)
    ], PostDescribeImportImageTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeImportImageTasksHeaders)
    ], PostDescribeImportImageTasksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImportImageTasksRequest.prototype, "request", void 0);
    return PostDescribeImportImageTasksRequest;
}(SpeakeasyBase));
export { PostDescribeImportImageTasksRequest };
var PostDescribeImportImageTasksResponse = /** @class */ (function (_super) {
    __extends(PostDescribeImportImageTasksResponse, _super);
    function PostDescribeImportImageTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImportImageTasksResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeImportImageTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeImportImageTasksResponse.prototype, "statusCode", void 0);
    return PostDescribeImportImageTasksResponse;
}(SpeakeasyBase));
export { PostDescribeImportImageTasksResponse };
