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
export var PostDescribeCustomerGatewaysActionEnum;
(function (PostDescribeCustomerGatewaysActionEnum) {
    PostDescribeCustomerGatewaysActionEnum["DescribeCustomerGateways"] = "DescribeCustomerGateways";
})(PostDescribeCustomerGatewaysActionEnum || (PostDescribeCustomerGatewaysActionEnum = {}));
export var PostDescribeCustomerGatewaysVersionEnum;
(function (PostDescribeCustomerGatewaysVersionEnum) {
    PostDescribeCustomerGatewaysVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeCustomerGatewaysVersionEnum || (PostDescribeCustomerGatewaysVersionEnum = {}));
var PostDescribeCustomerGatewaysQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeCustomerGatewaysQueryParams, _super);
    function PostDescribeCustomerGatewaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysQueryParams.prototype, "version", void 0);
    return PostDescribeCustomerGatewaysQueryParams;
}(SpeakeasyBase));
export { PostDescribeCustomerGatewaysQueryParams };
var PostDescribeCustomerGatewaysHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeCustomerGatewaysHeaders, _super);
    function PostDescribeCustomerGatewaysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeCustomerGatewaysHeaders;
}(SpeakeasyBase));
export { PostDescribeCustomerGatewaysHeaders };
var PostDescribeCustomerGatewaysRequest = /** @class */ (function (_super) {
    __extends(PostDescribeCustomerGatewaysRequest, _super);
    function PostDescribeCustomerGatewaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCustomerGatewaysQueryParams)
    ], PostDescribeCustomerGatewaysRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCustomerGatewaysHeaders)
    ], PostDescribeCustomerGatewaysRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCustomerGatewaysRequest.prototype, "request", void 0);
    return PostDescribeCustomerGatewaysRequest;
}(SpeakeasyBase));
export { PostDescribeCustomerGatewaysRequest };
var PostDescribeCustomerGatewaysResponse = /** @class */ (function (_super) {
    __extends(PostDescribeCustomerGatewaysResponse, _super);
    function PostDescribeCustomerGatewaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCustomerGatewaysResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeCustomerGatewaysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeCustomerGatewaysResponse.prototype, "statusCode", void 0);
    return PostDescribeCustomerGatewaysResponse;
}(SpeakeasyBase));
export { PostDescribeCustomerGatewaysResponse };
