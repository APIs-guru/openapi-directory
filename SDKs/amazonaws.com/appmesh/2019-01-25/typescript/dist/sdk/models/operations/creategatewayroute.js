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
var CreateGatewayRoutePathParams = /** @class */ (function (_super) {
    __extends(CreateGatewayRoutePathParams, _super);
    function CreateGatewayRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateGatewayRoutePathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], CreateGatewayRoutePathParams.prototype, "virtualGatewayName", void 0);
    return CreateGatewayRoutePathParams;
}(SpeakeasyBase));
export { CreateGatewayRoutePathParams };
var CreateGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteQueryParams, _super);
    function CreateGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteQueryParams.prototype, "meshOwner", void 0);
    return CreateGatewayRouteQueryParams;
}(SpeakeasyBase));
export { CreateGatewayRouteQueryParams };
var CreateGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteHeaders, _super);
    function CreateGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateGatewayRouteHeaders;
}(SpeakeasyBase));
export { CreateGatewayRouteHeaders };
// CreateGatewayRouteRequestBodySpec
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
var CreateGatewayRouteRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteRequestBodySpec, _super);
    function CreateGatewayRouteRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcRoute" }),
        __metadata("design:type", shared.GrpcGatewayRoute)
    ], CreateGatewayRouteRequestBodySpec.prototype, "grpcRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http2Route" }),
        __metadata("design:type", shared.HttpGatewayRoute)
    ], CreateGatewayRouteRequestBodySpec.prototype, "http2Route", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRoute" }),
        __metadata("design:type", shared.HttpGatewayRoute)
    ], CreateGatewayRouteRequestBodySpec.prototype, "httpRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateGatewayRouteRequestBodySpec.prototype, "priority", void 0);
    return CreateGatewayRouteRequestBodySpec;
}(SpeakeasyBase));
export { CreateGatewayRouteRequestBodySpec };
var CreateGatewayRouteRequestBody = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteRequestBody, _super);
    function CreateGatewayRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayRouteName" }),
        __metadata("design:type", String)
    ], CreateGatewayRouteRequestBody.prototype, "gatewayRouteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", CreateGatewayRouteRequestBodySpec)
    ], CreateGatewayRouteRequestBody.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef }),
        __metadata("design:type", Array)
    ], CreateGatewayRouteRequestBody.prototype, "tags", void 0);
    return CreateGatewayRouteRequestBody;
}(SpeakeasyBase));
export { CreateGatewayRouteRequestBody };
var CreateGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteRequest, _super);
    function CreateGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGatewayRoutePathParams)
    ], CreateGatewayRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGatewayRouteQueryParams)
    ], CreateGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGatewayRouteHeaders)
    ], CreateGatewayRouteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGatewayRouteRequestBody)
    ], CreateGatewayRouteRequest.prototype, "request", void 0);
    return CreateGatewayRouteRequest;
}(SpeakeasyBase));
export { CreateGatewayRouteRequest };
var CreateGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(CreateGatewayRouteResponse, _super);
    function CreateGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateGatewayRouteOutput)
    ], CreateGatewayRouteResponse.prototype, "createGatewayRouteOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGatewayRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGatewayRouteResponse.prototype, "tooManyRequestsException", void 0);
    return CreateGatewayRouteResponse;
}(SpeakeasyBase));
export { CreateGatewayRouteResponse };
