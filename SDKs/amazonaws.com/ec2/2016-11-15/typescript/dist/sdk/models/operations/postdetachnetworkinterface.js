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
export var PostDetachNetworkInterfaceActionEnum;
(function (PostDetachNetworkInterfaceActionEnum) {
    PostDetachNetworkInterfaceActionEnum["DetachNetworkInterface"] = "DetachNetworkInterface";
})(PostDetachNetworkInterfaceActionEnum || (PostDetachNetworkInterfaceActionEnum = {}));
export var PostDetachNetworkInterfaceVersionEnum;
(function (PostDetachNetworkInterfaceVersionEnum) {
    PostDetachNetworkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDetachNetworkInterfaceVersionEnum || (PostDetachNetworkInterfaceVersionEnum = {}));
var PostDetachNetworkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(PostDetachNetworkInterfaceQueryParams, _super);
    function PostDetachNetworkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceQueryParams.prototype, "version", void 0);
    return PostDetachNetworkInterfaceQueryParams;
}(SpeakeasyBase));
export { PostDetachNetworkInterfaceQueryParams };
var PostDetachNetworkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(PostDetachNetworkInterfaceHeaders, _super);
    function PostDetachNetworkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDetachNetworkInterfaceHeaders;
}(SpeakeasyBase));
export { PostDetachNetworkInterfaceHeaders };
var PostDetachNetworkInterfaceRequest = /** @class */ (function (_super) {
    __extends(PostDetachNetworkInterfaceRequest, _super);
    function PostDetachNetworkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachNetworkInterfaceQueryParams)
    ], PostDetachNetworkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachNetworkInterfaceHeaders)
    ], PostDetachNetworkInterfaceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDetachNetworkInterfaceRequest.prototype, "request", void 0);
    return PostDetachNetworkInterfaceRequest;
}(SpeakeasyBase));
export { PostDetachNetworkInterfaceRequest };
var PostDetachNetworkInterfaceResponse = /** @class */ (function (_super) {
    __extends(PostDetachNetworkInterfaceResponse, _super);
    function PostDetachNetworkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDetachNetworkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDetachNetworkInterfaceResponse.prototype, "statusCode", void 0);
    return PostDetachNetworkInterfaceResponse;
}(SpeakeasyBase));
export { PostDetachNetworkInterfaceResponse };
