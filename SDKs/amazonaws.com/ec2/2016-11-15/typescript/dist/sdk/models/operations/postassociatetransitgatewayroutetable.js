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
export var PostAssociateTransitGatewayRouteTableActionEnum;
(function (PostAssociateTransitGatewayRouteTableActionEnum) {
    PostAssociateTransitGatewayRouteTableActionEnum["AssociateTransitGatewayRouteTable"] = "AssociateTransitGatewayRouteTable";
})(PostAssociateTransitGatewayRouteTableActionEnum || (PostAssociateTransitGatewayRouteTableActionEnum = {}));
export var PostAssociateTransitGatewayRouteTableVersionEnum;
(function (PostAssociateTransitGatewayRouteTableVersionEnum) {
    PostAssociateTransitGatewayRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssociateTransitGatewayRouteTableVersionEnum || (PostAssociateTransitGatewayRouteTableVersionEnum = {}));
var PostAssociateTransitGatewayRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(PostAssociateTransitGatewayRouteTableQueryParams, _super);
    function PostAssociateTransitGatewayRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableQueryParams.prototype, "version", void 0);
    return PostAssociateTransitGatewayRouteTableQueryParams;
}(SpeakeasyBase));
export { PostAssociateTransitGatewayRouteTableQueryParams };
var PostAssociateTransitGatewayRouteTableHeaders = /** @class */ (function (_super) {
    __extends(PostAssociateTransitGatewayRouteTableHeaders, _super);
    function PostAssociateTransitGatewayRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssociateTransitGatewayRouteTableHeaders;
}(SpeakeasyBase));
export { PostAssociateTransitGatewayRouteTableHeaders };
var PostAssociateTransitGatewayRouteTableRequest = /** @class */ (function (_super) {
    __extends(PostAssociateTransitGatewayRouteTableRequest, _super);
    function PostAssociateTransitGatewayRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAssociateTransitGatewayRouteTableQueryParams)
    ], PostAssociateTransitGatewayRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAssociateTransitGatewayRouteTableHeaders)
    ], PostAssociateTransitGatewayRouteTableRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssociateTransitGatewayRouteTableRequest.prototype, "request", void 0);
    return PostAssociateTransitGatewayRouteTableRequest;
}(SpeakeasyBase));
export { PostAssociateTransitGatewayRouteTableRequest };
var PostAssociateTransitGatewayRouteTableResponse = /** @class */ (function (_super) {
    __extends(PostAssociateTransitGatewayRouteTableResponse, _super);
    function PostAssociateTransitGatewayRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAssociateTransitGatewayRouteTableResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAssociateTransitGatewayRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAssociateTransitGatewayRouteTableResponse.prototype, "statusCode", void 0);
    return PostAssociateTransitGatewayRouteTableResponse;
}(SpeakeasyBase));
export { PostAssociateTransitGatewayRouteTableResponse };
