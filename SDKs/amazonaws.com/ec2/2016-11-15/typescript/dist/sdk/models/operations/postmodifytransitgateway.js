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
export var PostModifyTransitGatewayActionEnum;
(function (PostModifyTransitGatewayActionEnum) {
    PostModifyTransitGatewayActionEnum["ModifyTransitGateway"] = "ModifyTransitGateway";
})(PostModifyTransitGatewayActionEnum || (PostModifyTransitGatewayActionEnum = {}));
export var PostModifyTransitGatewayVersionEnum;
(function (PostModifyTransitGatewayVersionEnum) {
    PostModifyTransitGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyTransitGatewayVersionEnum || (PostModifyTransitGatewayVersionEnum = {}));
var PostModifyTransitGatewayQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayQueryParams, _super);
    function PostModifyTransitGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayQueryParams.prototype, "version", void 0);
    return PostModifyTransitGatewayQueryParams;
}(SpeakeasyBase));
export { PostModifyTransitGatewayQueryParams };
var PostModifyTransitGatewayHeaders = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayHeaders, _super);
    function PostModifyTransitGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyTransitGatewayHeaders;
}(SpeakeasyBase));
export { PostModifyTransitGatewayHeaders };
var PostModifyTransitGatewayRequest = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayRequest, _super);
    function PostModifyTransitGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyTransitGatewayQueryParams)
    ], PostModifyTransitGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyTransitGatewayHeaders)
    ], PostModifyTransitGatewayRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyTransitGatewayRequest.prototype, "request", void 0);
    return PostModifyTransitGatewayRequest;
}(SpeakeasyBase));
export { PostModifyTransitGatewayRequest };
var PostModifyTransitGatewayResponse = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayResponse, _super);
    function PostModifyTransitGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyTransitGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyTransitGatewayResponse.prototype, "statusCode", void 0);
    return PostModifyTransitGatewayResponse;
}(SpeakeasyBase));
export { PostModifyTransitGatewayResponse };
