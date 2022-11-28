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
export var PostCreateTransitGatewayVpcAttachmentActionEnum;
(function (PostCreateTransitGatewayVpcAttachmentActionEnum) {
    PostCreateTransitGatewayVpcAttachmentActionEnum["CreateTransitGatewayVpcAttachment"] = "CreateTransitGatewayVpcAttachment";
})(PostCreateTransitGatewayVpcAttachmentActionEnum || (PostCreateTransitGatewayVpcAttachmentActionEnum = {}));
export var PostCreateTransitGatewayVpcAttachmentVersionEnum;
(function (PostCreateTransitGatewayVpcAttachmentVersionEnum) {
    PostCreateTransitGatewayVpcAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTransitGatewayVpcAttachmentVersionEnum || (PostCreateTransitGatewayVpcAttachmentVersionEnum = {}));
var PostCreateTransitGatewayVpcAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayVpcAttachmentQueryParams, _super);
    function PostCreateTransitGatewayVpcAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentQueryParams.prototype, "version", void 0);
    return PostCreateTransitGatewayVpcAttachmentQueryParams;
}(SpeakeasyBase));
export { PostCreateTransitGatewayVpcAttachmentQueryParams };
var PostCreateTransitGatewayVpcAttachmentHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayVpcAttachmentHeaders, _super);
    function PostCreateTransitGatewayVpcAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTransitGatewayVpcAttachmentHeaders;
}(SpeakeasyBase));
export { PostCreateTransitGatewayVpcAttachmentHeaders };
var PostCreateTransitGatewayVpcAttachmentRequest = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayVpcAttachmentRequest, _super);
    function PostCreateTransitGatewayVpcAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateTransitGatewayVpcAttachmentQueryParams)
    ], PostCreateTransitGatewayVpcAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateTransitGatewayVpcAttachmentHeaders)
    ], PostCreateTransitGatewayVpcAttachmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayVpcAttachmentRequest.prototype, "request", void 0);
    return PostCreateTransitGatewayVpcAttachmentRequest;
}(SpeakeasyBase));
export { PostCreateTransitGatewayVpcAttachmentRequest };
var PostCreateTransitGatewayVpcAttachmentResponse = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayVpcAttachmentResponse, _super);
    function PostCreateTransitGatewayVpcAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayVpcAttachmentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayVpcAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateTransitGatewayVpcAttachmentResponse.prototype, "statusCode", void 0);
    return PostCreateTransitGatewayVpcAttachmentResponse;
}(SpeakeasyBase));
export { PostCreateTransitGatewayVpcAttachmentResponse };
