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
export var PostDetachInternetGatewayActionEnum;
(function (PostDetachInternetGatewayActionEnum) {
    PostDetachInternetGatewayActionEnum["DetachInternetGateway"] = "DetachInternetGateway";
})(PostDetachInternetGatewayActionEnum || (PostDetachInternetGatewayActionEnum = {}));
export var PostDetachInternetGatewayVersionEnum;
(function (PostDetachInternetGatewayVersionEnum) {
    PostDetachInternetGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDetachInternetGatewayVersionEnum || (PostDetachInternetGatewayVersionEnum = {}));
var PostDetachInternetGatewayQueryParams = /** @class */ (function (_super) {
    __extends(PostDetachInternetGatewayQueryParams, _super);
    function PostDetachInternetGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayQueryParams.prototype, "version", void 0);
    return PostDetachInternetGatewayQueryParams;
}(SpeakeasyBase));
export { PostDetachInternetGatewayQueryParams };
var PostDetachInternetGatewayHeaders = /** @class */ (function (_super) {
    __extends(PostDetachInternetGatewayHeaders, _super);
    function PostDetachInternetGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDetachInternetGatewayHeaders;
}(SpeakeasyBase));
export { PostDetachInternetGatewayHeaders };
var PostDetachInternetGatewayRequest = /** @class */ (function (_super) {
    __extends(PostDetachInternetGatewayRequest, _super);
    function PostDetachInternetGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachInternetGatewayQueryParams)
    ], PostDetachInternetGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachInternetGatewayHeaders)
    ], PostDetachInternetGatewayRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDetachInternetGatewayRequest.prototype, "request", void 0);
    return PostDetachInternetGatewayRequest;
}(SpeakeasyBase));
export { PostDetachInternetGatewayRequest };
var PostDetachInternetGatewayResponse = /** @class */ (function (_super) {
    __extends(PostDetachInternetGatewayResponse, _super);
    function PostDetachInternetGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDetachInternetGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDetachInternetGatewayResponse.prototype, "statusCode", void 0);
    return PostDetachInternetGatewayResponse;
}(SpeakeasyBase));
export { PostDetachInternetGatewayResponse };
