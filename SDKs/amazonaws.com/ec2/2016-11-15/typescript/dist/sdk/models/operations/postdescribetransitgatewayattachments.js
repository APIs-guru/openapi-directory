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
export var PostDescribeTransitGatewayAttachmentsActionEnum;
(function (PostDescribeTransitGatewayAttachmentsActionEnum) {
    PostDescribeTransitGatewayAttachmentsActionEnum["DescribeTransitGatewayAttachments"] = "DescribeTransitGatewayAttachments";
})(PostDescribeTransitGatewayAttachmentsActionEnum || (PostDescribeTransitGatewayAttachmentsActionEnum = {}));
export var PostDescribeTransitGatewayAttachmentsVersionEnum;
(function (PostDescribeTransitGatewayAttachmentsVersionEnum) {
    PostDescribeTransitGatewayAttachmentsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeTransitGatewayAttachmentsVersionEnum || (PostDescribeTransitGatewayAttachmentsVersionEnum = {}));
var PostDescribeTransitGatewayAttachmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayAttachmentsQueryParams, _super);
    function PostDescribeTransitGatewayAttachmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsQueryParams.prototype, "version", void 0);
    return PostDescribeTransitGatewayAttachmentsQueryParams;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayAttachmentsQueryParams };
var PostDescribeTransitGatewayAttachmentsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayAttachmentsHeaders, _super);
    function PostDescribeTransitGatewayAttachmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeTransitGatewayAttachmentsHeaders;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayAttachmentsHeaders };
var PostDescribeTransitGatewayAttachmentsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayAttachmentsRequest, _super);
    function PostDescribeTransitGatewayAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayAttachmentsQueryParams)
    ], PostDescribeTransitGatewayAttachmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayAttachmentsHeaders)
    ], PostDescribeTransitGatewayAttachmentsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayAttachmentsRequest.prototype, "request", void 0);
    return PostDescribeTransitGatewayAttachmentsRequest;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayAttachmentsRequest };
var PostDescribeTransitGatewayAttachmentsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayAttachmentsResponse, _super);
    function PostDescribeTransitGatewayAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayAttachmentsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeTransitGatewayAttachmentsResponse.prototype, "statusCode", void 0);
    return PostDescribeTransitGatewayAttachmentsResponse;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayAttachmentsResponse };
