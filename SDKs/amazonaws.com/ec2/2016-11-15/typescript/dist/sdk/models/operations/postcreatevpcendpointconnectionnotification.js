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
export var PostCreateVpcEndpointConnectionNotificationActionEnum;
(function (PostCreateVpcEndpointConnectionNotificationActionEnum) {
    PostCreateVpcEndpointConnectionNotificationActionEnum["CreateVpcEndpointConnectionNotification"] = "CreateVpcEndpointConnectionNotification";
})(PostCreateVpcEndpointConnectionNotificationActionEnum || (PostCreateVpcEndpointConnectionNotificationActionEnum = {}));
export var PostCreateVpcEndpointConnectionNotificationVersionEnum;
(function (PostCreateVpcEndpointConnectionNotificationVersionEnum) {
    PostCreateVpcEndpointConnectionNotificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateVpcEndpointConnectionNotificationVersionEnum || (PostCreateVpcEndpointConnectionNotificationVersionEnum = {}));
var PostCreateVpcEndpointConnectionNotificationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointConnectionNotificationQueryParams, _super);
    function PostCreateVpcEndpointConnectionNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationQueryParams.prototype, "version", void 0);
    return PostCreateVpcEndpointConnectionNotificationQueryParams;
}(SpeakeasyBase));
export { PostCreateVpcEndpointConnectionNotificationQueryParams };
var PostCreateVpcEndpointConnectionNotificationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointConnectionNotificationHeaders, _super);
    function PostCreateVpcEndpointConnectionNotificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateVpcEndpointConnectionNotificationHeaders;
}(SpeakeasyBase));
export { PostCreateVpcEndpointConnectionNotificationHeaders };
var PostCreateVpcEndpointConnectionNotificationRequest = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointConnectionNotificationRequest, _super);
    function PostCreateVpcEndpointConnectionNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateVpcEndpointConnectionNotificationQueryParams)
    ], PostCreateVpcEndpointConnectionNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateVpcEndpointConnectionNotificationHeaders)
    ], PostCreateVpcEndpointConnectionNotificationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcEndpointConnectionNotificationRequest.prototype, "request", void 0);
    return PostCreateVpcEndpointConnectionNotificationRequest;
}(SpeakeasyBase));
export { PostCreateVpcEndpointConnectionNotificationRequest };
var PostCreateVpcEndpointConnectionNotificationResponse = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointConnectionNotificationResponse, _super);
    function PostCreateVpcEndpointConnectionNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcEndpointConnectionNotificationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointConnectionNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateVpcEndpointConnectionNotificationResponse.prototype, "statusCode", void 0);
    return PostCreateVpcEndpointConnectionNotificationResponse;
}(SpeakeasyBase));
export { PostCreateVpcEndpointConnectionNotificationResponse };
