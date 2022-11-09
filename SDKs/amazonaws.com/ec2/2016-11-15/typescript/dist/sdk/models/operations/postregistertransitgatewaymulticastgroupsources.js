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
export var PostRegisterTransitGatewayMulticastGroupSourcesActionEnum;
(function (PostRegisterTransitGatewayMulticastGroupSourcesActionEnum) {
    PostRegisterTransitGatewayMulticastGroupSourcesActionEnum["RegisterTransitGatewayMulticastGroupSources"] = "RegisterTransitGatewayMulticastGroupSources";
})(PostRegisterTransitGatewayMulticastGroupSourcesActionEnum || (PostRegisterTransitGatewayMulticastGroupSourcesActionEnum = {}));
export var PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
(function (PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum) {
    PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum || (PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum = {}));
var PostRegisterTransitGatewayMulticastGroupSourcesQueryParams = /** @class */ (function (_super) {
    __extends(PostRegisterTransitGatewayMulticastGroupSourcesQueryParams, _super);
    function PostRegisterTransitGatewayMulticastGroupSourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesQueryParams.prototype, "version", void 0);
    return PostRegisterTransitGatewayMulticastGroupSourcesQueryParams;
}(SpeakeasyBase));
export { PostRegisterTransitGatewayMulticastGroupSourcesQueryParams };
var PostRegisterTransitGatewayMulticastGroupSourcesHeaders = /** @class */ (function (_super) {
    __extends(PostRegisterTransitGatewayMulticastGroupSourcesHeaders, _super);
    function PostRegisterTransitGatewayMulticastGroupSourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRegisterTransitGatewayMulticastGroupSourcesHeaders;
}(SpeakeasyBase));
export { PostRegisterTransitGatewayMulticastGroupSourcesHeaders };
var PostRegisterTransitGatewayMulticastGroupSourcesRequest = /** @class */ (function (_super) {
    __extends(PostRegisterTransitGatewayMulticastGroupSourcesRequest, _super);
    function PostRegisterTransitGatewayMulticastGroupSourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterTransitGatewayMulticastGroupSourcesQueryParams)
    ], PostRegisterTransitGatewayMulticastGroupSourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRegisterTransitGatewayMulticastGroupSourcesHeaders)
    ], PostRegisterTransitGatewayMulticastGroupSourcesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRegisterTransitGatewayMulticastGroupSourcesRequest.prototype, "request", void 0);
    return PostRegisterTransitGatewayMulticastGroupSourcesRequest;
}(SpeakeasyBase));
export { PostRegisterTransitGatewayMulticastGroupSourcesRequest };
var PostRegisterTransitGatewayMulticastGroupSourcesResponse = /** @class */ (function (_super) {
    __extends(PostRegisterTransitGatewayMulticastGroupSourcesResponse, _super);
    function PostRegisterTransitGatewayMulticastGroupSourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRegisterTransitGatewayMulticastGroupSourcesResponse.prototype, "statusCode", void 0);
    return PostRegisterTransitGatewayMulticastGroupSourcesResponse;
}(SpeakeasyBase));
export { PostRegisterTransitGatewayMulticastGroupSourcesResponse };
