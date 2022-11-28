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
export var PostRejectTransitGatewayVpcAttachmentActionEnum;
(function (PostRejectTransitGatewayVpcAttachmentActionEnum) {
    PostRejectTransitGatewayVpcAttachmentActionEnum["RejectTransitGatewayVpcAttachment"] = "RejectTransitGatewayVpcAttachment";
})(PostRejectTransitGatewayVpcAttachmentActionEnum || (PostRejectTransitGatewayVpcAttachmentActionEnum = {}));
export var PostRejectTransitGatewayVpcAttachmentVersionEnum;
(function (PostRejectTransitGatewayVpcAttachmentVersionEnum) {
    PostRejectTransitGatewayVpcAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostRejectTransitGatewayVpcAttachmentVersionEnum || (PostRejectTransitGatewayVpcAttachmentVersionEnum = {}));
var PostRejectTransitGatewayVpcAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(PostRejectTransitGatewayVpcAttachmentQueryParams, _super);
    function PostRejectTransitGatewayVpcAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentQueryParams.prototype, "version", void 0);
    return PostRejectTransitGatewayVpcAttachmentQueryParams;
}(SpeakeasyBase));
export { PostRejectTransitGatewayVpcAttachmentQueryParams };
var PostRejectTransitGatewayVpcAttachmentHeaders = /** @class */ (function (_super) {
    __extends(PostRejectTransitGatewayVpcAttachmentHeaders, _super);
    function PostRejectTransitGatewayVpcAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRejectTransitGatewayVpcAttachmentHeaders;
}(SpeakeasyBase));
export { PostRejectTransitGatewayVpcAttachmentHeaders };
var PostRejectTransitGatewayVpcAttachmentRequest = /** @class */ (function (_super) {
    __extends(PostRejectTransitGatewayVpcAttachmentRequest, _super);
    function PostRejectTransitGatewayVpcAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRejectTransitGatewayVpcAttachmentQueryParams)
    ], PostRejectTransitGatewayVpcAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRejectTransitGatewayVpcAttachmentHeaders)
    ], PostRejectTransitGatewayVpcAttachmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRejectTransitGatewayVpcAttachmentRequest.prototype, "request", void 0);
    return PostRejectTransitGatewayVpcAttachmentRequest;
}(SpeakeasyBase));
export { PostRejectTransitGatewayVpcAttachmentRequest };
var PostRejectTransitGatewayVpcAttachmentResponse = /** @class */ (function (_super) {
    __extends(PostRejectTransitGatewayVpcAttachmentResponse, _super);
    function PostRejectTransitGatewayVpcAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRejectTransitGatewayVpcAttachmentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRejectTransitGatewayVpcAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRejectTransitGatewayVpcAttachmentResponse.prototype, "statusCode", void 0);
    return PostRejectTransitGatewayVpcAttachmentResponse;
}(SpeakeasyBase));
export { PostRejectTransitGatewayVpcAttachmentResponse };
