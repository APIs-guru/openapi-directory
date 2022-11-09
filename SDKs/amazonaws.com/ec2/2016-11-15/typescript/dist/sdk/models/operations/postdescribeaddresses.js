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
export var PostDescribeAddressesActionEnum;
(function (PostDescribeAddressesActionEnum) {
    PostDescribeAddressesActionEnum["DescribeAddresses"] = "DescribeAddresses";
})(PostDescribeAddressesActionEnum || (PostDescribeAddressesActionEnum = {}));
export var PostDescribeAddressesVersionEnum;
(function (PostDescribeAddressesVersionEnum) {
    PostDescribeAddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeAddressesVersionEnum || (PostDescribeAddressesVersionEnum = {}));
var PostDescribeAddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAddressesQueryParams, _super);
    function PostDescribeAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesQueryParams.prototype, "version", void 0);
    return PostDescribeAddressesQueryParams;
}(SpeakeasyBase));
export { PostDescribeAddressesQueryParams };
var PostDescribeAddressesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAddressesHeaders, _super);
    function PostDescribeAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAddressesHeaders;
}(SpeakeasyBase));
export { PostDescribeAddressesHeaders };
var PostDescribeAddressesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAddressesRequest, _super);
    function PostDescribeAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAddressesQueryParams)
    ], PostDescribeAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAddressesHeaders)
    ], PostDescribeAddressesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAddressesRequest.prototype, "request", void 0);
    return PostDescribeAddressesRequest;
}(SpeakeasyBase));
export { PostDescribeAddressesRequest };
var PostDescribeAddressesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAddressesResponse, _super);
    function PostDescribeAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAddressesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeAddressesResponse.prototype, "statusCode", void 0);
    return PostDescribeAddressesResponse;
}(SpeakeasyBase));
export { PostDescribeAddressesResponse };
