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
export var PostCreateCarrierGatewayActionEnum;
(function (PostCreateCarrierGatewayActionEnum) {
    PostCreateCarrierGatewayActionEnum["CreateCarrierGateway"] = "CreateCarrierGateway";
})(PostCreateCarrierGatewayActionEnum || (PostCreateCarrierGatewayActionEnum = {}));
export var PostCreateCarrierGatewayVersionEnum;
(function (PostCreateCarrierGatewayVersionEnum) {
    PostCreateCarrierGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateCarrierGatewayVersionEnum || (PostCreateCarrierGatewayVersionEnum = {}));
var PostCreateCarrierGatewayQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateCarrierGatewayQueryParams, _super);
    function PostCreateCarrierGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayQueryParams.prototype, "version", void 0);
    return PostCreateCarrierGatewayQueryParams;
}(SpeakeasyBase));
export { PostCreateCarrierGatewayQueryParams };
var PostCreateCarrierGatewayHeaders = /** @class */ (function (_super) {
    __extends(PostCreateCarrierGatewayHeaders, _super);
    function PostCreateCarrierGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateCarrierGatewayHeaders;
}(SpeakeasyBase));
export { PostCreateCarrierGatewayHeaders };
var PostCreateCarrierGatewayRequest = /** @class */ (function (_super) {
    __extends(PostCreateCarrierGatewayRequest, _super);
    function PostCreateCarrierGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateCarrierGatewayQueryParams)
    ], PostCreateCarrierGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateCarrierGatewayHeaders)
    ], PostCreateCarrierGatewayRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateCarrierGatewayRequest.prototype, "request", void 0);
    return PostCreateCarrierGatewayRequest;
}(SpeakeasyBase));
export { PostCreateCarrierGatewayRequest };
var PostCreateCarrierGatewayResponse = /** @class */ (function (_super) {
    __extends(PostCreateCarrierGatewayResponse, _super);
    function PostCreateCarrierGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateCarrierGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateCarrierGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateCarrierGatewayResponse.prototype, "statusCode", void 0);
    return PostCreateCarrierGatewayResponse;
}(SpeakeasyBase));
export { PostCreateCarrierGatewayResponse };
