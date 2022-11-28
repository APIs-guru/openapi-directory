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
export var PostDescribeImportSnapshotTasksActionEnum;
(function (PostDescribeImportSnapshotTasksActionEnum) {
    PostDescribeImportSnapshotTasksActionEnum["DescribeImportSnapshotTasks"] = "DescribeImportSnapshotTasks";
})(PostDescribeImportSnapshotTasksActionEnum || (PostDescribeImportSnapshotTasksActionEnum = {}));
export var PostDescribeImportSnapshotTasksVersionEnum;
(function (PostDescribeImportSnapshotTasksVersionEnum) {
    PostDescribeImportSnapshotTasksVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeImportSnapshotTasksVersionEnum || (PostDescribeImportSnapshotTasksVersionEnum = {}));
var PostDescribeImportSnapshotTasksQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeImportSnapshotTasksQueryParams, _super);
    function PostDescribeImportSnapshotTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksQueryParams.prototype, "version", void 0);
    return PostDescribeImportSnapshotTasksQueryParams;
}(SpeakeasyBase));
export { PostDescribeImportSnapshotTasksQueryParams };
var PostDescribeImportSnapshotTasksHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeImportSnapshotTasksHeaders, _super);
    function PostDescribeImportSnapshotTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeImportSnapshotTasksHeaders;
}(SpeakeasyBase));
export { PostDescribeImportSnapshotTasksHeaders };
var PostDescribeImportSnapshotTasksRequest = /** @class */ (function (_super) {
    __extends(PostDescribeImportSnapshotTasksRequest, _super);
    function PostDescribeImportSnapshotTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeImportSnapshotTasksQueryParams)
    ], PostDescribeImportSnapshotTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeImportSnapshotTasksHeaders)
    ], PostDescribeImportSnapshotTasksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImportSnapshotTasksRequest.prototype, "request", void 0);
    return PostDescribeImportSnapshotTasksRequest;
}(SpeakeasyBase));
export { PostDescribeImportSnapshotTasksRequest };
var PostDescribeImportSnapshotTasksResponse = /** @class */ (function (_super) {
    __extends(PostDescribeImportSnapshotTasksResponse, _super);
    function PostDescribeImportSnapshotTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImportSnapshotTasksResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeImportSnapshotTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeImportSnapshotTasksResponse.prototype, "statusCode", void 0);
    return PostDescribeImportSnapshotTasksResponse;
}(SpeakeasyBase));
export { PostDescribeImportSnapshotTasksResponse };
