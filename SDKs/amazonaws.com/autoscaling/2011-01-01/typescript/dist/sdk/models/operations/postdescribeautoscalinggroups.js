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
export var PostDescribeAutoScalingGroupsActionEnum;
(function (PostDescribeAutoScalingGroupsActionEnum) {
    PostDescribeAutoScalingGroupsActionEnum["DescribeAutoScalingGroups"] = "DescribeAutoScalingGroups";
})(PostDescribeAutoScalingGroupsActionEnum || (PostDescribeAutoScalingGroupsActionEnum = {}));
export var PostDescribeAutoScalingGroupsVersionEnum;
(function (PostDescribeAutoScalingGroupsVersionEnum) {
    PostDescribeAutoScalingGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeAutoScalingGroupsVersionEnum || (PostDescribeAutoScalingGroupsVersionEnum = {}));
var PostDescribeAutoScalingGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingGroupsQueryParams, _super);
    function PostDescribeAutoScalingGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeAutoScalingGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeAutoScalingGroupsQueryParams };
var PostDescribeAutoScalingGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingGroupsHeaders, _super);
    function PostDescribeAutoScalingGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAutoScalingGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeAutoScalingGroupsHeaders };
var PostDescribeAutoScalingGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingGroupsRequest, _super);
    function PostDescribeAutoScalingGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAutoScalingGroupsQueryParams)
    ], PostDescribeAutoScalingGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAutoScalingGroupsHeaders)
    ], PostDescribeAutoScalingGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAutoScalingGroupsRequest.prototype, "request", void 0);
    return PostDescribeAutoScalingGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeAutoScalingGroupsRequest };
var PostDescribeAutoScalingGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingGroupsResponse, _super);
    function PostDescribeAutoScalingGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAutoScalingGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeAutoScalingGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeAutoScalingGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeAutoScalingGroupsResponse };
