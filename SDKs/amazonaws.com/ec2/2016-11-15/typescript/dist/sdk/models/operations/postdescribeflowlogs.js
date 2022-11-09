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
export var PostDescribeFlowLogsActionEnum;
(function (PostDescribeFlowLogsActionEnum) {
    PostDescribeFlowLogsActionEnum["DescribeFlowLogs"] = "DescribeFlowLogs";
})(PostDescribeFlowLogsActionEnum || (PostDescribeFlowLogsActionEnum = {}));
export var PostDescribeFlowLogsVersionEnum;
(function (PostDescribeFlowLogsVersionEnum) {
    PostDescribeFlowLogsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeFlowLogsVersionEnum || (PostDescribeFlowLogsVersionEnum = {}));
var PostDescribeFlowLogsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeFlowLogsQueryParams, _super);
    function PostDescribeFlowLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsQueryParams.prototype, "version", void 0);
    return PostDescribeFlowLogsQueryParams;
}(SpeakeasyBase));
export { PostDescribeFlowLogsQueryParams };
var PostDescribeFlowLogsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeFlowLogsHeaders, _super);
    function PostDescribeFlowLogsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeFlowLogsHeaders;
}(SpeakeasyBase));
export { PostDescribeFlowLogsHeaders };
var PostDescribeFlowLogsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeFlowLogsRequest, _super);
    function PostDescribeFlowLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeFlowLogsQueryParams)
    ], PostDescribeFlowLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeFlowLogsHeaders)
    ], PostDescribeFlowLogsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFlowLogsRequest.prototype, "request", void 0);
    return PostDescribeFlowLogsRequest;
}(SpeakeasyBase));
export { PostDescribeFlowLogsRequest };
var PostDescribeFlowLogsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeFlowLogsResponse, _super);
    function PostDescribeFlowLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFlowLogsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeFlowLogsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeFlowLogsResponse.prototype, "statusCode", void 0);
    return PostDescribeFlowLogsResponse;
}(SpeakeasyBase));
export { PostDescribeFlowLogsResponse };
