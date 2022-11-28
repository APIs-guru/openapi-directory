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
var CreateRoutePathParams = /** @class */ (function (_super) {
    __extends(CreateRoutePathParams, _super);
    function CreateRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateRoutePathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" }),
        __metadata("design:type", String)
    ], CreateRoutePathParams.prototype, "virtualRouterName", void 0);
    return CreateRoutePathParams;
}(SpeakeasyBase));
export { CreateRoutePathParams };
var CreateRouteQueryParams = /** @class */ (function (_super) {
    __extends(CreateRouteQueryParams, _super);
    function CreateRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], CreateRouteQueryParams.prototype, "meshOwner", void 0);
    return CreateRouteQueryParams;
}(SpeakeasyBase));
export { CreateRouteQueryParams };
var CreateRouteHeaders = /** @class */ (function (_super) {
    __extends(CreateRouteHeaders, _super);
    function CreateRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRouteHeaders;
}(SpeakeasyBase));
export { CreateRouteHeaders };
// CreateRouteRequestBodySpec
/**
 * An object that represents a route specification. Specify one route type.
**/
var CreateRouteRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateRouteRequestBodySpec, _super);
    function CreateRouteRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcRoute" }),
        __metadata("design:type", shared.GrpcRoute)
    ], CreateRouteRequestBodySpec.prototype, "grpcRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http2Route" }),
        __metadata("design:type", shared.HttpRoute)
    ], CreateRouteRequestBodySpec.prototype, "http2Route", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRoute" }),
        __metadata("design:type", shared.HttpRoute)
    ], CreateRouteRequestBodySpec.prototype, "httpRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateRouteRequestBodySpec.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tcpRoute" }),
        __metadata("design:type", shared.TcpRoute)
    ], CreateRouteRequestBodySpec.prototype, "tcpRoute", void 0);
    return CreateRouteRequestBodySpec;
}(SpeakeasyBase));
export { CreateRouteRequestBodySpec };
var CreateRouteRequestBody = /** @class */ (function (_super) {
    __extends(CreateRouteRequestBody, _super);
    function CreateRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateRouteRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeName" }),
        __metadata("design:type", String)
    ], CreateRouteRequestBody.prototype, "routeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", CreateRouteRequestBodySpec)
    ], CreateRouteRequestBody.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef }),
        __metadata("design:type", Array)
    ], CreateRouteRequestBody.prototype, "tags", void 0);
    return CreateRouteRequestBody;
}(SpeakeasyBase));
export { CreateRouteRequestBody };
var CreateRouteRequest = /** @class */ (function (_super) {
    __extends(CreateRouteRequest, _super);
    function CreateRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRoutePathParams)
    ], CreateRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRouteQueryParams)
    ], CreateRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRouteHeaders)
    ], CreateRouteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRouteRequestBody)
    ], CreateRouteRequest.prototype, "request", void 0);
    return CreateRouteRequest;
}(SpeakeasyBase));
export { CreateRouteRequest };
var CreateRouteResponse = /** @class */ (function (_super) {
    __extends(CreateRouteResponse, _super);
    function CreateRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRouteOutput)
    ], CreateRouteResponse.prototype, "createRouteOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponse.prototype, "tooManyRequestsException", void 0);
    return CreateRouteResponse;
}(SpeakeasyBase));
export { CreateRouteResponse };
