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
export var PostDescribeScheduledInstancesActionEnum;
(function (PostDescribeScheduledInstancesActionEnum) {
    PostDescribeScheduledInstancesActionEnum["DescribeScheduledInstances"] = "DescribeScheduledInstances";
})(PostDescribeScheduledInstancesActionEnum || (PostDescribeScheduledInstancesActionEnum = {}));
export var PostDescribeScheduledInstancesVersionEnum;
(function (PostDescribeScheduledInstancesVersionEnum) {
    PostDescribeScheduledInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeScheduledInstancesVersionEnum || (PostDescribeScheduledInstancesVersionEnum = {}));
var PostDescribeScheduledInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeScheduledInstancesQueryParams, _super);
    function PostDescribeScheduledInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeScheduledInstancesQueryParams;
}(SpeakeasyBase));
export { PostDescribeScheduledInstancesQueryParams };
var PostDescribeScheduledInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeScheduledInstancesHeaders, _super);
    function PostDescribeScheduledInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeScheduledInstancesHeaders;
}(SpeakeasyBase));
export { PostDescribeScheduledInstancesHeaders };
var PostDescribeScheduledInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeScheduledInstancesRequest, _super);
    function PostDescribeScheduledInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeScheduledInstancesQueryParams)
    ], PostDescribeScheduledInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeScheduledInstancesHeaders)
    ], PostDescribeScheduledInstancesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeScheduledInstancesRequest.prototype, "request", void 0);
    return PostDescribeScheduledInstancesRequest;
}(SpeakeasyBase));
export { PostDescribeScheduledInstancesRequest };
var PostDescribeScheduledInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeScheduledInstancesResponse, _super);
    function PostDescribeScheduledInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeScheduledInstancesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeScheduledInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeScheduledInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeScheduledInstancesResponse;
}(SpeakeasyBase));
export { PostDescribeScheduledInstancesResponse };
