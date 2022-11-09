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
export var PostGetTransitGatewayAttachmentPropagationsActionEnum;
(function (PostGetTransitGatewayAttachmentPropagationsActionEnum) {
    PostGetTransitGatewayAttachmentPropagationsActionEnum["GetTransitGatewayAttachmentPropagations"] = "GetTransitGatewayAttachmentPropagations";
})(PostGetTransitGatewayAttachmentPropagationsActionEnum || (PostGetTransitGatewayAttachmentPropagationsActionEnum = {}));
export var PostGetTransitGatewayAttachmentPropagationsVersionEnum;
(function (PostGetTransitGatewayAttachmentPropagationsVersionEnum) {
    PostGetTransitGatewayAttachmentPropagationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetTransitGatewayAttachmentPropagationsVersionEnum || (PostGetTransitGatewayAttachmentPropagationsVersionEnum = {}));
var PostGetTransitGatewayAttachmentPropagationsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetTransitGatewayAttachmentPropagationsQueryParams, _super);
    function PostGetTransitGatewayAttachmentPropagationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsQueryParams.prototype, "version", void 0);
    return PostGetTransitGatewayAttachmentPropagationsQueryParams;
}(SpeakeasyBase));
export { PostGetTransitGatewayAttachmentPropagationsQueryParams };
var PostGetTransitGatewayAttachmentPropagationsHeaders = /** @class */ (function (_super) {
    __extends(PostGetTransitGatewayAttachmentPropagationsHeaders, _super);
    function PostGetTransitGatewayAttachmentPropagationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetTransitGatewayAttachmentPropagationsHeaders;
}(SpeakeasyBase));
export { PostGetTransitGatewayAttachmentPropagationsHeaders };
var PostGetTransitGatewayAttachmentPropagationsRequest = /** @class */ (function (_super) {
    __extends(PostGetTransitGatewayAttachmentPropagationsRequest, _super);
    function PostGetTransitGatewayAttachmentPropagationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetTransitGatewayAttachmentPropagationsQueryParams)
    ], PostGetTransitGatewayAttachmentPropagationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetTransitGatewayAttachmentPropagationsHeaders)
    ], PostGetTransitGatewayAttachmentPropagationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetTransitGatewayAttachmentPropagationsRequest.prototype, "request", void 0);
    return PostGetTransitGatewayAttachmentPropagationsRequest;
}(SpeakeasyBase));
export { PostGetTransitGatewayAttachmentPropagationsRequest };
var PostGetTransitGatewayAttachmentPropagationsResponse = /** @class */ (function (_super) {
    __extends(PostGetTransitGatewayAttachmentPropagationsResponse, _super);
    function PostGetTransitGatewayAttachmentPropagationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetTransitGatewayAttachmentPropagationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetTransitGatewayAttachmentPropagationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetTransitGatewayAttachmentPropagationsResponse.prototype, "statusCode", void 0);
    return PostGetTransitGatewayAttachmentPropagationsResponse;
}(SpeakeasyBase));
export { PostGetTransitGatewayAttachmentPropagationsResponse };
