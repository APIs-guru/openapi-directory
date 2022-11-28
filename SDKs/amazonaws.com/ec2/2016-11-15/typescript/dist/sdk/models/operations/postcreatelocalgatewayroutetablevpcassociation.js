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
export var PostCreateLocalGatewayRouteTableVpcAssociationActionEnum;
(function (PostCreateLocalGatewayRouteTableVpcAssociationActionEnum) {
    PostCreateLocalGatewayRouteTableVpcAssociationActionEnum["CreateLocalGatewayRouteTableVpcAssociation"] = "CreateLocalGatewayRouteTableVpcAssociation";
})(PostCreateLocalGatewayRouteTableVpcAssociationActionEnum || (PostCreateLocalGatewayRouteTableVpcAssociationActionEnum = {}));
export var PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum;
(function (PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum) {
    PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum || (PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum = {}));
var PostCreateLocalGatewayRouteTableVpcAssociationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateLocalGatewayRouteTableVpcAssociationQueryParams, _super);
    function PostCreateLocalGatewayRouteTableVpcAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationQueryParams.prototype, "version", void 0);
    return PostCreateLocalGatewayRouteTableVpcAssociationQueryParams;
}(SpeakeasyBase));
export { PostCreateLocalGatewayRouteTableVpcAssociationQueryParams };
var PostCreateLocalGatewayRouteTableVpcAssociationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateLocalGatewayRouteTableVpcAssociationHeaders, _super);
    function PostCreateLocalGatewayRouteTableVpcAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateLocalGatewayRouteTableVpcAssociationHeaders;
}(SpeakeasyBase));
export { PostCreateLocalGatewayRouteTableVpcAssociationHeaders };
var PostCreateLocalGatewayRouteTableVpcAssociationRequest = /** @class */ (function (_super) {
    __extends(PostCreateLocalGatewayRouteTableVpcAssociationRequest, _super);
    function PostCreateLocalGatewayRouteTableVpcAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLocalGatewayRouteTableVpcAssociationQueryParams)
    ], PostCreateLocalGatewayRouteTableVpcAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLocalGatewayRouteTableVpcAssociationHeaders)
    ], PostCreateLocalGatewayRouteTableVpcAssociationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateLocalGatewayRouteTableVpcAssociationRequest.prototype, "request", void 0);
    return PostCreateLocalGatewayRouteTableVpcAssociationRequest;
}(SpeakeasyBase));
export { PostCreateLocalGatewayRouteTableVpcAssociationRequest };
var PostCreateLocalGatewayRouteTableVpcAssociationResponse = /** @class */ (function (_super) {
    __extends(PostCreateLocalGatewayRouteTableVpcAssociationResponse, _super);
    function PostCreateLocalGatewayRouteTableVpcAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateLocalGatewayRouteTableVpcAssociationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateLocalGatewayRouteTableVpcAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateLocalGatewayRouteTableVpcAssociationResponse.prototype, "statusCode", void 0);
    return PostCreateLocalGatewayRouteTableVpcAssociationResponse;
}(SpeakeasyBase));
export { PostCreateLocalGatewayRouteTableVpcAssociationResponse };
