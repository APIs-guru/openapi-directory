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
export var PostDeleteTransitGatewayPeeringAttachmentActionEnum;
(function (PostDeleteTransitGatewayPeeringAttachmentActionEnum) {
    PostDeleteTransitGatewayPeeringAttachmentActionEnum["DeleteTransitGatewayPeeringAttachment"] = "DeleteTransitGatewayPeeringAttachment";
})(PostDeleteTransitGatewayPeeringAttachmentActionEnum || (PostDeleteTransitGatewayPeeringAttachmentActionEnum = {}));
export var PostDeleteTransitGatewayPeeringAttachmentVersionEnum;
(function (PostDeleteTransitGatewayPeeringAttachmentVersionEnum) {
    PostDeleteTransitGatewayPeeringAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteTransitGatewayPeeringAttachmentVersionEnum || (PostDeleteTransitGatewayPeeringAttachmentVersionEnum = {}));
var PostDeleteTransitGatewayPeeringAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayPeeringAttachmentQueryParams, _super);
    function PostDeleteTransitGatewayPeeringAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "version", void 0);
    return PostDeleteTransitGatewayPeeringAttachmentQueryParams;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayPeeringAttachmentQueryParams };
var PostDeleteTransitGatewayPeeringAttachmentHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayPeeringAttachmentHeaders, _super);
    function PostDeleteTransitGatewayPeeringAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteTransitGatewayPeeringAttachmentHeaders;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayPeeringAttachmentHeaders };
var PostDeleteTransitGatewayPeeringAttachmentRequest = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayPeeringAttachmentRequest, _super);
    function PostDeleteTransitGatewayPeeringAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteTransitGatewayPeeringAttachmentQueryParams)
    ], PostDeleteTransitGatewayPeeringAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteTransitGatewayPeeringAttachmentHeaders)
    ], PostDeleteTransitGatewayPeeringAttachmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTransitGatewayPeeringAttachmentRequest.prototype, "request", void 0);
    return PostDeleteTransitGatewayPeeringAttachmentRequest;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayPeeringAttachmentRequest };
var PostDeleteTransitGatewayPeeringAttachmentResponse = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayPeeringAttachmentResponse, _super);
    function PostDeleteTransitGatewayPeeringAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTransitGatewayPeeringAttachmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayPeeringAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteTransitGatewayPeeringAttachmentResponse.prototype, "statusCode", void 0);
    return PostDeleteTransitGatewayPeeringAttachmentResponse;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayPeeringAttachmentResponse };
