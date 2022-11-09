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
export var PostDescribeSecurityGroupsActionEnum;
(function (PostDescribeSecurityGroupsActionEnum) {
    PostDescribeSecurityGroupsActionEnum["DescribeSecurityGroups"] = "DescribeSecurityGroups";
})(PostDescribeSecurityGroupsActionEnum || (PostDescribeSecurityGroupsActionEnum = {}));
export var PostDescribeSecurityGroupsVersionEnum;
(function (PostDescribeSecurityGroupsVersionEnum) {
    PostDescribeSecurityGroupsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeSecurityGroupsVersionEnum || (PostDescribeSecurityGroupsVersionEnum = {}));
var PostDescribeSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSecurityGroupsQueryParams, _super);
    function PostDescribeSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeSecurityGroupsQueryParams };
var PostDescribeSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSecurityGroupsHeaders, _super);
    function PostDescribeSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSecurityGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeSecurityGroupsHeaders };
var PostDescribeSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSecurityGroupsRequest, _super);
    function PostDescribeSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSecurityGroupsQueryParams)
    ], PostDescribeSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSecurityGroupsHeaders)
    ], PostDescribeSecurityGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSecurityGroupsRequest.prototype, "request", void 0);
    return PostDescribeSecurityGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeSecurityGroupsRequest };
var PostDescribeSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSecurityGroupsResponse, _super);
    function PostDescribeSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeSecurityGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeSecurityGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeSecurityGroupsResponse };
