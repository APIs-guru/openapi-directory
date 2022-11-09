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
export var PostCreateNatGatewayActionEnum;
(function (PostCreateNatGatewayActionEnum) {
    PostCreateNatGatewayActionEnum["CreateNatGateway"] = "CreateNatGateway";
})(PostCreateNatGatewayActionEnum || (PostCreateNatGatewayActionEnum = {}));
export var PostCreateNatGatewayVersionEnum;
(function (PostCreateNatGatewayVersionEnum) {
    PostCreateNatGatewayVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateNatGatewayVersionEnum || (PostCreateNatGatewayVersionEnum = {}));
var PostCreateNatGatewayQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateNatGatewayQueryParams, _super);
    function PostCreateNatGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayQueryParams.prototype, "version", void 0);
    return PostCreateNatGatewayQueryParams;
}(SpeakeasyBase));
export { PostCreateNatGatewayQueryParams };
var PostCreateNatGatewayHeaders = /** @class */ (function (_super) {
    __extends(PostCreateNatGatewayHeaders, _super);
    function PostCreateNatGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateNatGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateNatGatewayHeaders;
}(SpeakeasyBase));
export { PostCreateNatGatewayHeaders };
var PostCreateNatGatewayRequest = /** @class */ (function (_super) {
    __extends(PostCreateNatGatewayRequest, _super);
    function PostCreateNatGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateNatGatewayQueryParams)
    ], PostCreateNatGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateNatGatewayHeaders)
    ], PostCreateNatGatewayRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateNatGatewayRequest.prototype, "request", void 0);
    return PostCreateNatGatewayRequest;
}(SpeakeasyBase));
export { PostCreateNatGatewayRequest };
var PostCreateNatGatewayResponse = /** @class */ (function (_super) {
    __extends(PostCreateNatGatewayResponse, _super);
    function PostCreateNatGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateNatGatewayResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateNatGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateNatGatewayResponse.prototype, "statusCode", void 0);
    return PostCreateNatGatewayResponse;
}(SpeakeasyBase));
export { PostCreateNatGatewayResponse };
