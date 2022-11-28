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
export var PostDescribeClientVpnConnectionsActionEnum;
(function (PostDescribeClientVpnConnectionsActionEnum) {
    PostDescribeClientVpnConnectionsActionEnum["DescribeClientVpnConnections"] = "DescribeClientVpnConnections";
})(PostDescribeClientVpnConnectionsActionEnum || (PostDescribeClientVpnConnectionsActionEnum = {}));
export var PostDescribeClientVpnConnectionsVersionEnum;
(function (PostDescribeClientVpnConnectionsVersionEnum) {
    PostDescribeClientVpnConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeClientVpnConnectionsVersionEnum || (PostDescribeClientVpnConnectionsVersionEnum = {}));
var PostDescribeClientVpnConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClientVpnConnectionsQueryParams, _super);
    function PostDescribeClientVpnConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsQueryParams.prototype, "version", void 0);
    return PostDescribeClientVpnConnectionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeClientVpnConnectionsQueryParams };
var PostDescribeClientVpnConnectionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClientVpnConnectionsHeaders, _super);
    function PostDescribeClientVpnConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClientVpnConnectionsHeaders;
}(SpeakeasyBase));
export { PostDescribeClientVpnConnectionsHeaders };
var PostDescribeClientVpnConnectionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClientVpnConnectionsRequest, _super);
    function PostDescribeClientVpnConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeClientVpnConnectionsQueryParams)
    ], PostDescribeClientVpnConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeClientVpnConnectionsHeaders)
    ], PostDescribeClientVpnConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClientVpnConnectionsRequest.prototype, "request", void 0);
    return PostDescribeClientVpnConnectionsRequest;
}(SpeakeasyBase));
export { PostDescribeClientVpnConnectionsRequest };
var PostDescribeClientVpnConnectionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClientVpnConnectionsResponse, _super);
    function PostDescribeClientVpnConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClientVpnConnectionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeClientVpnConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeClientVpnConnectionsResponse.prototype, "statusCode", void 0);
    return PostDescribeClientVpnConnectionsResponse;
}(SpeakeasyBase));
export { PostDescribeClientVpnConnectionsResponse };
