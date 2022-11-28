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
var UpdateVirtualGatewayPathParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayPathParams, _super);
    function UpdateVirtualGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayPathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayPathParams.prototype, "virtualGatewayName", void 0);
    return UpdateVirtualGatewayPathParams;
}(SpeakeasyBase));
export { UpdateVirtualGatewayPathParams };
var UpdateVirtualGatewayQueryParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayQueryParams, _super);
    function UpdateVirtualGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayQueryParams.prototype, "meshOwner", void 0);
    return UpdateVirtualGatewayQueryParams;
}(SpeakeasyBase));
export { UpdateVirtualGatewayQueryParams };
var UpdateVirtualGatewayHeaders = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayHeaders, _super);
    function UpdateVirtualGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVirtualGatewayHeaders;
}(SpeakeasyBase));
export { UpdateVirtualGatewayHeaders };
// UpdateVirtualGatewayRequestBodySpec
/**
 * An object that represents the specification of a service mesh resource.
**/
var UpdateVirtualGatewayRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayRequestBodySpec, _super);
    function UpdateVirtualGatewayRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendDefaults" }),
        __metadata("design:type", shared.VirtualGatewayBackendDefaults)
    ], UpdateVirtualGatewayRequestBodySpec.prototype, "backendDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener }),
        __metadata("design:type", Array)
    ], UpdateVirtualGatewayRequestBodySpec.prototype, "listeners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", shared.VirtualGatewayLogging)
    ], UpdateVirtualGatewayRequestBodySpec.prototype, "logging", void 0);
    return UpdateVirtualGatewayRequestBodySpec;
}(SpeakeasyBase));
export { UpdateVirtualGatewayRequestBodySpec };
var UpdateVirtualGatewayRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayRequestBody, _super);
    function UpdateVirtualGatewayRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", UpdateVirtualGatewayRequestBodySpec)
    ], UpdateVirtualGatewayRequestBody.prototype, "spec", void 0);
    return UpdateVirtualGatewayRequestBody;
}(SpeakeasyBase));
export { UpdateVirtualGatewayRequestBody };
var UpdateVirtualGatewayRequest = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayRequest, _super);
    function UpdateVirtualGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualGatewayPathParams)
    ], UpdateVirtualGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualGatewayQueryParams)
    ], UpdateVirtualGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualGatewayHeaders)
    ], UpdateVirtualGatewayRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVirtualGatewayRequestBody)
    ], UpdateVirtualGatewayRequest.prototype, "request", void 0);
    return UpdateVirtualGatewayRequest;
}(SpeakeasyBase));
export { UpdateVirtualGatewayRequest };
var UpdateVirtualGatewayResponse = /** @class */ (function (_super) {
    __extends(UpdateVirtualGatewayResponse, _super);
    function UpdateVirtualGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVirtualGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVirtualGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualGatewayResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateVirtualGatewayOutput)
    ], UpdateVirtualGatewayResponse.prototype, "updateVirtualGatewayOutput", void 0);
    return UpdateVirtualGatewayResponse;
}(SpeakeasyBase));
export { UpdateVirtualGatewayResponse };
