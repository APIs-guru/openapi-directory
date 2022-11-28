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
var UpdateGatewayRoutePathParams = /** @class */ (function (_super) {
    __extends(UpdateGatewayRoutePathParams, _super);
    function UpdateGatewayRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gatewayRouteName" }),
        __metadata("design:type", String)
    ], UpdateGatewayRoutePathParams.prototype, "gatewayRouteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateGatewayRoutePathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], UpdateGatewayRoutePathParams.prototype, "virtualGatewayName", void 0);
    return UpdateGatewayRoutePathParams;
}(SpeakeasyBase));
export { UpdateGatewayRoutePathParams };
var UpdateGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteQueryParams, _super);
    function UpdateGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteQueryParams.prototype, "meshOwner", void 0);
    return UpdateGatewayRouteQueryParams;
}(SpeakeasyBase));
export { UpdateGatewayRouteQueryParams };
var UpdateGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteHeaders, _super);
    function UpdateGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGatewayRouteHeaders;
}(SpeakeasyBase));
export { UpdateGatewayRouteHeaders };
// UpdateGatewayRouteRequestBodySpec
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
var UpdateGatewayRouteRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteRequestBodySpec, _super);
    function UpdateGatewayRouteRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcRoute" }),
        __metadata("design:type", shared.GrpcGatewayRoute)
    ], UpdateGatewayRouteRequestBodySpec.prototype, "grpcRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http2Route" }),
        __metadata("design:type", shared.HttpGatewayRoute)
    ], UpdateGatewayRouteRequestBodySpec.prototype, "http2Route", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRoute" }),
        __metadata("design:type", shared.HttpGatewayRoute)
    ], UpdateGatewayRouteRequestBodySpec.prototype, "httpRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], UpdateGatewayRouteRequestBodySpec.prototype, "priority", void 0);
    return UpdateGatewayRouteRequestBodySpec;
}(SpeakeasyBase));
export { UpdateGatewayRouteRequestBodySpec };
var UpdateGatewayRouteRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteRequestBody, _super);
    function UpdateGatewayRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateGatewayRouteRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", UpdateGatewayRouteRequestBodySpec)
    ], UpdateGatewayRouteRequestBody.prototype, "spec", void 0);
    return UpdateGatewayRouteRequestBody;
}(SpeakeasyBase));
export { UpdateGatewayRouteRequestBody };
var UpdateGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteRequest, _super);
    function UpdateGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGatewayRoutePathParams)
    ], UpdateGatewayRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGatewayRouteQueryParams)
    ], UpdateGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGatewayRouteHeaders)
    ], UpdateGatewayRouteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGatewayRouteRequestBody)
    ], UpdateGatewayRouteRequest.prototype, "request", void 0);
    return UpdateGatewayRouteRequest;
}(SpeakeasyBase));
export { UpdateGatewayRouteRequest };
var UpdateGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(UpdateGatewayRouteResponse, _super);
    function UpdateGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGatewayRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayRouteResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateGatewayRouteOutput)
    ], UpdateGatewayRouteResponse.prototype, "updateGatewayRouteOutput", void 0);
    return UpdateGatewayRouteResponse;
}(SpeakeasyBase));
export { UpdateGatewayRouteResponse };
