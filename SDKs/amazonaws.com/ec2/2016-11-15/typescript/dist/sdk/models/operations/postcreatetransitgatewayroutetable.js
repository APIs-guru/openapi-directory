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
export var PostCreateTransitGatewayRouteTableActionEnum;
(function (PostCreateTransitGatewayRouteTableActionEnum) {
    PostCreateTransitGatewayRouteTableActionEnum["CreateTransitGatewayRouteTable"] = "CreateTransitGatewayRouteTable";
})(PostCreateTransitGatewayRouteTableActionEnum || (PostCreateTransitGatewayRouteTableActionEnum = {}));
export var PostCreateTransitGatewayRouteTableVersionEnum;
(function (PostCreateTransitGatewayRouteTableVersionEnum) {
    PostCreateTransitGatewayRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTransitGatewayRouteTableVersionEnum || (PostCreateTransitGatewayRouteTableVersionEnum = {}));
var PostCreateTransitGatewayRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteTableQueryParams, _super);
    function PostCreateTransitGatewayRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableQueryParams.prototype, "version", void 0);
    return PostCreateTransitGatewayRouteTableQueryParams;
}(SpeakeasyBase));
export { PostCreateTransitGatewayRouteTableQueryParams };
var PostCreateTransitGatewayRouteTableHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteTableHeaders, _super);
    function PostCreateTransitGatewayRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTransitGatewayRouteTableHeaders;
}(SpeakeasyBase));
export { PostCreateTransitGatewayRouteTableHeaders };
var PostCreateTransitGatewayRouteTableRequest = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteTableRequest, _super);
    function PostCreateTransitGatewayRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateTransitGatewayRouteTableQueryParams)
    ], PostCreateTransitGatewayRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateTransitGatewayRouteTableHeaders)
    ], PostCreateTransitGatewayRouteTableRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayRouteTableRequest.prototype, "request", void 0);
    return PostCreateTransitGatewayRouteTableRequest;
}(SpeakeasyBase));
export { PostCreateTransitGatewayRouteTableRequest };
var PostCreateTransitGatewayRouteTableResponse = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteTableResponse, _super);
    function PostCreateTransitGatewayRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayRouteTableResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateTransitGatewayRouteTableResponse.prototype, "statusCode", void 0);
    return PostCreateTransitGatewayRouteTableResponse;
}(SpeakeasyBase));
export { PostCreateTransitGatewayRouteTableResponse };
