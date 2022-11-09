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
export var PostCreateTransitGatewayPrefixListReferenceActionEnum;
(function (PostCreateTransitGatewayPrefixListReferenceActionEnum) {
    PostCreateTransitGatewayPrefixListReferenceActionEnum["CreateTransitGatewayPrefixListReference"] = "CreateTransitGatewayPrefixListReference";
})(PostCreateTransitGatewayPrefixListReferenceActionEnum || (PostCreateTransitGatewayPrefixListReferenceActionEnum = {}));
export var PostCreateTransitGatewayPrefixListReferenceVersionEnum;
(function (PostCreateTransitGatewayPrefixListReferenceVersionEnum) {
    PostCreateTransitGatewayPrefixListReferenceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTransitGatewayPrefixListReferenceVersionEnum || (PostCreateTransitGatewayPrefixListReferenceVersionEnum = {}));
var PostCreateTransitGatewayPrefixListReferenceQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayPrefixListReferenceQueryParams, _super);
    function PostCreateTransitGatewayPrefixListReferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceQueryParams.prototype, "version", void 0);
    return PostCreateTransitGatewayPrefixListReferenceQueryParams;
}(SpeakeasyBase));
export { PostCreateTransitGatewayPrefixListReferenceQueryParams };
var PostCreateTransitGatewayPrefixListReferenceHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayPrefixListReferenceHeaders, _super);
    function PostCreateTransitGatewayPrefixListReferenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTransitGatewayPrefixListReferenceHeaders;
}(SpeakeasyBase));
export { PostCreateTransitGatewayPrefixListReferenceHeaders };
var PostCreateTransitGatewayPrefixListReferenceRequest = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayPrefixListReferenceRequest, _super);
    function PostCreateTransitGatewayPrefixListReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTransitGatewayPrefixListReferenceQueryParams)
    ], PostCreateTransitGatewayPrefixListReferenceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTransitGatewayPrefixListReferenceHeaders)
    ], PostCreateTransitGatewayPrefixListReferenceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayPrefixListReferenceRequest.prototype, "request", void 0);
    return PostCreateTransitGatewayPrefixListReferenceRequest;
}(SpeakeasyBase));
export { PostCreateTransitGatewayPrefixListReferenceRequest };
var PostCreateTransitGatewayPrefixListReferenceResponse = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayPrefixListReferenceResponse, _super);
    function PostCreateTransitGatewayPrefixListReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayPrefixListReferenceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayPrefixListReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateTransitGatewayPrefixListReferenceResponse.prototype, "statusCode", void 0);
    return PostCreateTransitGatewayPrefixListReferenceResponse;
}(SpeakeasyBase));
export { PostCreateTransitGatewayPrefixListReferenceResponse };
