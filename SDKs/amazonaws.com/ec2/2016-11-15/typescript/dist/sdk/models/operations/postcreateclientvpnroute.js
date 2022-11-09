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
export var PostCreateClientVpnRouteActionEnum;
(function (PostCreateClientVpnRouteActionEnum) {
    PostCreateClientVpnRouteActionEnum["CreateClientVpnRoute"] = "CreateClientVpnRoute";
})(PostCreateClientVpnRouteActionEnum || (PostCreateClientVpnRouteActionEnum = {}));
export var PostCreateClientVpnRouteVersionEnum;
(function (PostCreateClientVpnRouteVersionEnum) {
    PostCreateClientVpnRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateClientVpnRouteVersionEnum || (PostCreateClientVpnRouteVersionEnum = {}));
var PostCreateClientVpnRouteQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateClientVpnRouteQueryParams, _super);
    function PostCreateClientVpnRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteQueryParams.prototype, "version", void 0);
    return PostCreateClientVpnRouteQueryParams;
}(SpeakeasyBase));
export { PostCreateClientVpnRouteQueryParams };
var PostCreateClientVpnRouteHeaders = /** @class */ (function (_super) {
    __extends(PostCreateClientVpnRouteHeaders, _super);
    function PostCreateClientVpnRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateClientVpnRouteHeaders;
}(SpeakeasyBase));
export { PostCreateClientVpnRouteHeaders };
var PostCreateClientVpnRouteRequest = /** @class */ (function (_super) {
    __extends(PostCreateClientVpnRouteRequest, _super);
    function PostCreateClientVpnRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateClientVpnRouteQueryParams)
    ], PostCreateClientVpnRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateClientVpnRouteHeaders)
    ], PostCreateClientVpnRouteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateClientVpnRouteRequest.prototype, "request", void 0);
    return PostCreateClientVpnRouteRequest;
}(SpeakeasyBase));
export { PostCreateClientVpnRouteRequest };
var PostCreateClientVpnRouteResponse = /** @class */ (function (_super) {
    __extends(PostCreateClientVpnRouteResponse, _super);
    function PostCreateClientVpnRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateClientVpnRouteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateClientVpnRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateClientVpnRouteResponse.prototype, "statusCode", void 0);
    return PostCreateClientVpnRouteResponse;
}(SpeakeasyBase));
export { PostCreateClientVpnRouteResponse };
