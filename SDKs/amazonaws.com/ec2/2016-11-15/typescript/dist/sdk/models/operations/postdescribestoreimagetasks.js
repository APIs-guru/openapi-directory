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
export var PostDescribeStoreImageTasksActionEnum;
(function (PostDescribeStoreImageTasksActionEnum) {
    PostDescribeStoreImageTasksActionEnum["DescribeStoreImageTasks"] = "DescribeStoreImageTasks";
})(PostDescribeStoreImageTasksActionEnum || (PostDescribeStoreImageTasksActionEnum = {}));
export var PostDescribeStoreImageTasksVersionEnum;
(function (PostDescribeStoreImageTasksVersionEnum) {
    PostDescribeStoreImageTasksVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeStoreImageTasksVersionEnum || (PostDescribeStoreImageTasksVersionEnum = {}));
var PostDescribeStoreImageTasksQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeStoreImageTasksQueryParams, _super);
    function PostDescribeStoreImageTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksQueryParams.prototype, "version", void 0);
    return PostDescribeStoreImageTasksQueryParams;
}(SpeakeasyBase));
export { PostDescribeStoreImageTasksQueryParams };
var PostDescribeStoreImageTasksHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeStoreImageTasksHeaders, _super);
    function PostDescribeStoreImageTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeStoreImageTasksHeaders;
}(SpeakeasyBase));
export { PostDescribeStoreImageTasksHeaders };
var PostDescribeStoreImageTasksRequest = /** @class */ (function (_super) {
    __extends(PostDescribeStoreImageTasksRequest, _super);
    function PostDescribeStoreImageTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeStoreImageTasksQueryParams)
    ], PostDescribeStoreImageTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeStoreImageTasksHeaders)
    ], PostDescribeStoreImageTasksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeStoreImageTasksRequest.prototype, "request", void 0);
    return PostDescribeStoreImageTasksRequest;
}(SpeakeasyBase));
export { PostDescribeStoreImageTasksRequest };
var PostDescribeStoreImageTasksResponse = /** @class */ (function (_super) {
    __extends(PostDescribeStoreImageTasksResponse, _super);
    function PostDescribeStoreImageTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeStoreImageTasksResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeStoreImageTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeStoreImageTasksResponse.prototype, "statusCode", void 0);
    return PostDescribeStoreImageTasksResponse;
}(SpeakeasyBase));
export { PostDescribeStoreImageTasksResponse };
