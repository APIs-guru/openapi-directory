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
export var PostDescribeExportTasksActionEnum;
(function (PostDescribeExportTasksActionEnum) {
    PostDescribeExportTasksActionEnum["DescribeExportTasks"] = "DescribeExportTasks";
})(PostDescribeExportTasksActionEnum || (PostDescribeExportTasksActionEnum = {}));
export var PostDescribeExportTasksVersionEnum;
(function (PostDescribeExportTasksVersionEnum) {
    PostDescribeExportTasksVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeExportTasksVersionEnum || (PostDescribeExportTasksVersionEnum = {}));
var PostDescribeExportTasksQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeExportTasksQueryParams, _super);
    function PostDescribeExportTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksQueryParams.prototype, "version", void 0);
    return PostDescribeExportTasksQueryParams;
}(SpeakeasyBase));
export { PostDescribeExportTasksQueryParams };
var PostDescribeExportTasksHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeExportTasksHeaders, _super);
    function PostDescribeExportTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeExportTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeExportTasksHeaders;
}(SpeakeasyBase));
export { PostDescribeExportTasksHeaders };
var PostDescribeExportTasksRequest = /** @class */ (function (_super) {
    __extends(PostDescribeExportTasksRequest, _super);
    function PostDescribeExportTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeExportTasksQueryParams)
    ], PostDescribeExportTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeExportTasksHeaders)
    ], PostDescribeExportTasksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeExportTasksRequest.prototype, "request", void 0);
    return PostDescribeExportTasksRequest;
}(SpeakeasyBase));
export { PostDescribeExportTasksRequest };
var PostDescribeExportTasksResponse = /** @class */ (function (_super) {
    __extends(PostDescribeExportTasksResponse, _super);
    function PostDescribeExportTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeExportTasksResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeExportTasksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeExportTasksResponse.prototype, "statusCode", void 0);
    return PostDescribeExportTasksResponse;
}(SpeakeasyBase));
export { PostDescribeExportTasksResponse };
