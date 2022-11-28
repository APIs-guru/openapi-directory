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
export var PostUnassignIpv6AddressesActionEnum;
(function (PostUnassignIpv6AddressesActionEnum) {
    PostUnassignIpv6AddressesActionEnum["UnassignIpv6Addresses"] = "UnassignIpv6Addresses";
})(PostUnassignIpv6AddressesActionEnum || (PostUnassignIpv6AddressesActionEnum = {}));
export var PostUnassignIpv6AddressesVersionEnum;
(function (PostUnassignIpv6AddressesVersionEnum) {
    PostUnassignIpv6AddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostUnassignIpv6AddressesVersionEnum || (PostUnassignIpv6AddressesVersionEnum = {}));
var PostUnassignIpv6AddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostUnassignIpv6AddressesQueryParams, _super);
    function PostUnassignIpv6AddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesQueryParams.prototype, "version", void 0);
    return PostUnassignIpv6AddressesQueryParams;
}(SpeakeasyBase));
export { PostUnassignIpv6AddressesQueryParams };
var PostUnassignIpv6AddressesHeaders = /** @class */ (function (_super) {
    __extends(PostUnassignIpv6AddressesHeaders, _super);
    function PostUnassignIpv6AddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUnassignIpv6AddressesHeaders;
}(SpeakeasyBase));
export { PostUnassignIpv6AddressesHeaders };
var PostUnassignIpv6AddressesRequest = /** @class */ (function (_super) {
    __extends(PostUnassignIpv6AddressesRequest, _super);
    function PostUnassignIpv6AddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUnassignIpv6AddressesQueryParams)
    ], PostUnassignIpv6AddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUnassignIpv6AddressesHeaders)
    ], PostUnassignIpv6AddressesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUnassignIpv6AddressesRequest.prototype, "request", void 0);
    return PostUnassignIpv6AddressesRequest;
}(SpeakeasyBase));
export { PostUnassignIpv6AddressesRequest };
var PostUnassignIpv6AddressesResponse = /** @class */ (function (_super) {
    __extends(PostUnassignIpv6AddressesResponse, _super);
    function PostUnassignIpv6AddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUnassignIpv6AddressesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUnassignIpv6AddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUnassignIpv6AddressesResponse.prototype, "statusCode", void 0);
    return PostUnassignIpv6AddressesResponse;
}(SpeakeasyBase));
export { PostUnassignIpv6AddressesResponse };
