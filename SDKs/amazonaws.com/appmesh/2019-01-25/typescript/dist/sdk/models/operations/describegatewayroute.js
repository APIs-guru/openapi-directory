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
import * as shared from "../shared";
var DescribeGatewayRoutePathParams = /** @class */ (function (_super) {
    __extends(DescribeGatewayRoutePathParams, _super);
    function DescribeGatewayRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gatewayRouteName" }),
        __metadata("design:type", String)
    ], DescribeGatewayRoutePathParams.prototype, "gatewayRouteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], DescribeGatewayRoutePathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], DescribeGatewayRoutePathParams.prototype, "virtualGatewayName", void 0);
    return DescribeGatewayRoutePathParams;
}(SpeakeasyBase));
export { DescribeGatewayRoutePathParams };
var DescribeGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(DescribeGatewayRouteQueryParams, _super);
    function DescribeGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteQueryParams.prototype, "meshOwner", void 0);
    return DescribeGatewayRouteQueryParams;
}(SpeakeasyBase));
export { DescribeGatewayRouteQueryParams };
var DescribeGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(DescribeGatewayRouteHeaders, _super);
    function DescribeGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeGatewayRouteHeaders;
}(SpeakeasyBase));
export { DescribeGatewayRouteHeaders };
var DescribeGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(DescribeGatewayRouteRequest, _super);
    function DescribeGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGatewayRoutePathParams)
    ], DescribeGatewayRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGatewayRouteQueryParams)
    ], DescribeGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGatewayRouteHeaders)
    ], DescribeGatewayRouteRequest.prototype, "headers", void 0);
    return DescribeGatewayRouteRequest;
}(SpeakeasyBase));
export { DescribeGatewayRouteRequest };
var DescribeGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(DescribeGatewayRouteResponse, _super);
    function DescribeGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeGatewayRouteOutput)
    ], DescribeGatewayRouteResponse.prototype, "describeGatewayRouteOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeGatewayRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGatewayRouteResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeGatewayRouteResponse;
}(SpeakeasyBase));
export { DescribeGatewayRouteResponse };
