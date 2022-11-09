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
export var PostDescribeTransitGatewayVpcAttachmentsActionEnum;
(function (PostDescribeTransitGatewayVpcAttachmentsActionEnum) {
    PostDescribeTransitGatewayVpcAttachmentsActionEnum["DescribeTransitGatewayVpcAttachments"] = "DescribeTransitGatewayVpcAttachments";
})(PostDescribeTransitGatewayVpcAttachmentsActionEnum || (PostDescribeTransitGatewayVpcAttachmentsActionEnum = {}));
export var PostDescribeTransitGatewayVpcAttachmentsVersionEnum;
(function (PostDescribeTransitGatewayVpcAttachmentsVersionEnum) {
    PostDescribeTransitGatewayVpcAttachmentsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeTransitGatewayVpcAttachmentsVersionEnum || (PostDescribeTransitGatewayVpcAttachmentsVersionEnum = {}));
var PostDescribeTransitGatewayVpcAttachmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayVpcAttachmentsQueryParams, _super);
    function PostDescribeTransitGatewayVpcAttachmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsQueryParams.prototype, "version", void 0);
    return PostDescribeTransitGatewayVpcAttachmentsQueryParams;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayVpcAttachmentsQueryParams };
var PostDescribeTransitGatewayVpcAttachmentsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayVpcAttachmentsHeaders, _super);
    function PostDescribeTransitGatewayVpcAttachmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeTransitGatewayVpcAttachmentsHeaders;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayVpcAttachmentsHeaders };
var PostDescribeTransitGatewayVpcAttachmentsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayVpcAttachmentsRequest, _super);
    function PostDescribeTransitGatewayVpcAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayVpcAttachmentsQueryParams)
    ], PostDescribeTransitGatewayVpcAttachmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTransitGatewayVpcAttachmentsHeaders)
    ], PostDescribeTransitGatewayVpcAttachmentsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayVpcAttachmentsRequest.prototype, "request", void 0);
    return PostDescribeTransitGatewayVpcAttachmentsRequest;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayVpcAttachmentsRequest };
var PostDescribeTransitGatewayVpcAttachmentsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeTransitGatewayVpcAttachmentsResponse, _super);
    function PostDescribeTransitGatewayVpcAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTransitGatewayVpcAttachmentsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeTransitGatewayVpcAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeTransitGatewayVpcAttachmentsResponse.prototype, "statusCode", void 0);
    return PostDescribeTransitGatewayVpcAttachmentsResponse;
}(SpeakeasyBase));
export { PostDescribeTransitGatewayVpcAttachmentsResponse };
