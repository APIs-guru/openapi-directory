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
export var PostTerminateClientVpnConnectionsActionEnum;
(function (PostTerminateClientVpnConnectionsActionEnum) {
    PostTerminateClientVpnConnectionsActionEnum["TerminateClientVpnConnections"] = "TerminateClientVpnConnections";
})(PostTerminateClientVpnConnectionsActionEnum || (PostTerminateClientVpnConnectionsActionEnum = {}));
export var PostTerminateClientVpnConnectionsVersionEnum;
(function (PostTerminateClientVpnConnectionsVersionEnum) {
    PostTerminateClientVpnConnectionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostTerminateClientVpnConnectionsVersionEnum || (PostTerminateClientVpnConnectionsVersionEnum = {}));
var PostTerminateClientVpnConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(PostTerminateClientVpnConnectionsQueryParams, _super);
    function PostTerminateClientVpnConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsQueryParams.prototype, "version", void 0);
    return PostTerminateClientVpnConnectionsQueryParams;
}(SpeakeasyBase));
export { PostTerminateClientVpnConnectionsQueryParams };
var PostTerminateClientVpnConnectionsHeaders = /** @class */ (function (_super) {
    __extends(PostTerminateClientVpnConnectionsHeaders, _super);
    function PostTerminateClientVpnConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostTerminateClientVpnConnectionsHeaders;
}(SpeakeasyBase));
export { PostTerminateClientVpnConnectionsHeaders };
var PostTerminateClientVpnConnectionsRequest = /** @class */ (function (_super) {
    __extends(PostTerminateClientVpnConnectionsRequest, _super);
    function PostTerminateClientVpnConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostTerminateClientVpnConnectionsQueryParams)
    ], PostTerminateClientVpnConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostTerminateClientVpnConnectionsHeaders)
    ], PostTerminateClientVpnConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTerminateClientVpnConnectionsRequest.prototype, "request", void 0);
    return PostTerminateClientVpnConnectionsRequest;
}(SpeakeasyBase));
export { PostTerminateClientVpnConnectionsRequest };
var PostTerminateClientVpnConnectionsResponse = /** @class */ (function (_super) {
    __extends(PostTerminateClientVpnConnectionsResponse, _super);
    function PostTerminateClientVpnConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostTerminateClientVpnConnectionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostTerminateClientVpnConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostTerminateClientVpnConnectionsResponse.prototype, "statusCode", void 0);
    return PostTerminateClientVpnConnectionsResponse;
}(SpeakeasyBase));
export { PostTerminateClientVpnConnectionsResponse };
