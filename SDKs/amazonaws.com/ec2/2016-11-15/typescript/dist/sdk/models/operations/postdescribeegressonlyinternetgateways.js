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
export var PostDescribeEgressOnlyInternetGatewaysActionEnum;
(function (PostDescribeEgressOnlyInternetGatewaysActionEnum) {
    PostDescribeEgressOnlyInternetGatewaysActionEnum["DescribeEgressOnlyInternetGateways"] = "DescribeEgressOnlyInternetGateways";
})(PostDescribeEgressOnlyInternetGatewaysActionEnum || (PostDescribeEgressOnlyInternetGatewaysActionEnum = {}));
export var PostDescribeEgressOnlyInternetGatewaysVersionEnum;
(function (PostDescribeEgressOnlyInternetGatewaysVersionEnum) {
    PostDescribeEgressOnlyInternetGatewaysVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeEgressOnlyInternetGatewaysVersionEnum || (PostDescribeEgressOnlyInternetGatewaysVersionEnum = {}));
var PostDescribeEgressOnlyInternetGatewaysQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEgressOnlyInternetGatewaysQueryParams, _super);
    function PostDescribeEgressOnlyInternetGatewaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysQueryParams.prototype, "version", void 0);
    return PostDescribeEgressOnlyInternetGatewaysQueryParams;
}(SpeakeasyBase));
export { PostDescribeEgressOnlyInternetGatewaysQueryParams };
var PostDescribeEgressOnlyInternetGatewaysHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEgressOnlyInternetGatewaysHeaders, _super);
    function PostDescribeEgressOnlyInternetGatewaysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEgressOnlyInternetGatewaysHeaders;
}(SpeakeasyBase));
export { PostDescribeEgressOnlyInternetGatewaysHeaders };
var PostDescribeEgressOnlyInternetGatewaysRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEgressOnlyInternetGatewaysRequest, _super);
    function PostDescribeEgressOnlyInternetGatewaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeEgressOnlyInternetGatewaysQueryParams)
    ], PostDescribeEgressOnlyInternetGatewaysRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeEgressOnlyInternetGatewaysHeaders)
    ], PostDescribeEgressOnlyInternetGatewaysRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEgressOnlyInternetGatewaysRequest.prototype, "request", void 0);
    return PostDescribeEgressOnlyInternetGatewaysRequest;
}(SpeakeasyBase));
export { PostDescribeEgressOnlyInternetGatewaysRequest };
var PostDescribeEgressOnlyInternetGatewaysResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEgressOnlyInternetGatewaysResponse, _super);
    function PostDescribeEgressOnlyInternetGatewaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEgressOnlyInternetGatewaysResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeEgressOnlyInternetGatewaysResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeEgressOnlyInternetGatewaysResponse.prototype, "statusCode", void 0);
    return PostDescribeEgressOnlyInternetGatewaysResponse;
}(SpeakeasyBase));
export { PostDescribeEgressOnlyInternetGatewaysResponse };
