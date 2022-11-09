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
export var PostExportTransitGatewayRoutesActionEnum;
(function (PostExportTransitGatewayRoutesActionEnum) {
    PostExportTransitGatewayRoutesActionEnum["ExportTransitGatewayRoutes"] = "ExportTransitGatewayRoutes";
})(PostExportTransitGatewayRoutesActionEnum || (PostExportTransitGatewayRoutesActionEnum = {}));
export var PostExportTransitGatewayRoutesVersionEnum;
(function (PostExportTransitGatewayRoutesVersionEnum) {
    PostExportTransitGatewayRoutesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostExportTransitGatewayRoutesVersionEnum || (PostExportTransitGatewayRoutesVersionEnum = {}));
var PostExportTransitGatewayRoutesQueryParams = /** @class */ (function (_super) {
    __extends(PostExportTransitGatewayRoutesQueryParams, _super);
    function PostExportTransitGatewayRoutesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesQueryParams.prototype, "version", void 0);
    return PostExportTransitGatewayRoutesQueryParams;
}(SpeakeasyBase));
export { PostExportTransitGatewayRoutesQueryParams };
var PostExportTransitGatewayRoutesHeaders = /** @class */ (function (_super) {
    __extends(PostExportTransitGatewayRoutesHeaders, _super);
    function PostExportTransitGatewayRoutesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostExportTransitGatewayRoutesHeaders;
}(SpeakeasyBase));
export { PostExportTransitGatewayRoutesHeaders };
var PostExportTransitGatewayRoutesRequest = /** @class */ (function (_super) {
    __extends(PostExportTransitGatewayRoutesRequest, _super);
    function PostExportTransitGatewayRoutesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostExportTransitGatewayRoutesQueryParams)
    ], PostExportTransitGatewayRoutesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostExportTransitGatewayRoutesHeaders)
    ], PostExportTransitGatewayRoutesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostExportTransitGatewayRoutesRequest.prototype, "request", void 0);
    return PostExportTransitGatewayRoutesRequest;
}(SpeakeasyBase));
export { PostExportTransitGatewayRoutesRequest };
var PostExportTransitGatewayRoutesResponse = /** @class */ (function (_super) {
    __extends(PostExportTransitGatewayRoutesResponse, _super);
    function PostExportTransitGatewayRoutesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostExportTransitGatewayRoutesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostExportTransitGatewayRoutesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostExportTransitGatewayRoutesResponse.prototype, "statusCode", void 0);
    return PostExportTransitGatewayRoutesResponse;
}(SpeakeasyBase));
export { PostExportTransitGatewayRoutesResponse };
