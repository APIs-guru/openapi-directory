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
export var PostDescribeVpnConnectionsActionEnum;
(function (PostDescribeVpnConnectionsActionEnum) {
    PostDescribeVpnConnectionsActionEnum["DescribeVpnConnections"] = "DescribeVpnConnections";
})(PostDescribeVpnConnectionsActionEnum || (PostDescribeVpnConnectionsActionEnum = {}));
export var PostDescribeVpnConnectionsVersionEnum;
(function (PostDescribeVpnConnectionsVersionEnum) {
    PostDescribeVpnConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVpnConnectionsVersionEnum || (PostDescribeVpnConnectionsVersionEnum = {}));
var PostDescribeVpnConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVpnConnectionsQueryParams, _super);
    function PostDescribeVpnConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsQueryParams.prototype, "version", void 0);
    return PostDescribeVpnConnectionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeVpnConnectionsQueryParams };
var PostDescribeVpnConnectionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVpnConnectionsHeaders, _super);
    function PostDescribeVpnConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVpnConnectionsHeaders;
}(SpeakeasyBase));
export { PostDescribeVpnConnectionsHeaders };
var PostDescribeVpnConnectionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVpnConnectionsRequest, _super);
    function PostDescribeVpnConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVpnConnectionsQueryParams)
    ], PostDescribeVpnConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVpnConnectionsHeaders)
    ], PostDescribeVpnConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpnConnectionsRequest.prototype, "request", void 0);
    return PostDescribeVpnConnectionsRequest;
}(SpeakeasyBase));
export { PostDescribeVpnConnectionsRequest };
var PostDescribeVpnConnectionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVpnConnectionsResponse, _super);
    function PostDescribeVpnConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpnConnectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeVpnConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeVpnConnectionsResponse.prototype, "statusCode", void 0);
    return PostDescribeVpnConnectionsResponse;
}(SpeakeasyBase));
export { PostDescribeVpnConnectionsResponse };
