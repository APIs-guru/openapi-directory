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
export var PostDeleteTransitGatewayConnectPeerActionEnum;
(function (PostDeleteTransitGatewayConnectPeerActionEnum) {
    PostDeleteTransitGatewayConnectPeerActionEnum["DeleteTransitGatewayConnectPeer"] = "DeleteTransitGatewayConnectPeer";
})(PostDeleteTransitGatewayConnectPeerActionEnum || (PostDeleteTransitGatewayConnectPeerActionEnum = {}));
export var PostDeleteTransitGatewayConnectPeerVersionEnum;
(function (PostDeleteTransitGatewayConnectPeerVersionEnum) {
    PostDeleteTransitGatewayConnectPeerVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteTransitGatewayConnectPeerVersionEnum || (PostDeleteTransitGatewayConnectPeerVersionEnum = {}));
var PostDeleteTransitGatewayConnectPeerQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayConnectPeerQueryParams, _super);
    function PostDeleteTransitGatewayConnectPeerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerQueryParams.prototype, "version", void 0);
    return PostDeleteTransitGatewayConnectPeerQueryParams;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayConnectPeerQueryParams };
var PostDeleteTransitGatewayConnectPeerHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayConnectPeerHeaders, _super);
    function PostDeleteTransitGatewayConnectPeerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteTransitGatewayConnectPeerHeaders;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayConnectPeerHeaders };
var PostDeleteTransitGatewayConnectPeerRequest = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayConnectPeerRequest, _super);
    function PostDeleteTransitGatewayConnectPeerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteTransitGatewayConnectPeerQueryParams)
    ], PostDeleteTransitGatewayConnectPeerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteTransitGatewayConnectPeerHeaders)
    ], PostDeleteTransitGatewayConnectPeerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTransitGatewayConnectPeerRequest.prototype, "request", void 0);
    return PostDeleteTransitGatewayConnectPeerRequest;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayConnectPeerRequest };
var PostDeleteTransitGatewayConnectPeerResponse = /** @class */ (function (_super) {
    __extends(PostDeleteTransitGatewayConnectPeerResponse, _super);
    function PostDeleteTransitGatewayConnectPeerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTransitGatewayConnectPeerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteTransitGatewayConnectPeerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteTransitGatewayConnectPeerResponse.prototype, "statusCode", void 0);
    return PostDeleteTransitGatewayConnectPeerResponse;
}(SpeakeasyBase));
export { PostDeleteTransitGatewayConnectPeerResponse };
