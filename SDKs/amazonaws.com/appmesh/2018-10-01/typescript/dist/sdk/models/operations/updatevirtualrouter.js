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
var UpdateVirtualRouterPathParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterPathParams, _super);
    function UpdateVirtualRouterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterPathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterPathParams.prototype, "virtualRouterName", void 0);
    return UpdateVirtualRouterPathParams;
}(SpeakeasyBase));
export { UpdateVirtualRouterPathParams };
var UpdateVirtualRouterHeaders = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterHeaders, _super);
    function UpdateVirtualRouterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVirtualRouterHeaders;
}(SpeakeasyBase));
export { UpdateVirtualRouterHeaders };
// UpdateVirtualRouterRequestBodySpec
/**
 * An object representing the specification of a virtual router.
**/
var UpdateVirtualRouterRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterRequestBodySpec, _super);
    function UpdateVirtualRouterRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceNames" }),
        __metadata("design:type", Array)
    ], UpdateVirtualRouterRequestBodySpec.prototype, "serviceNames", void 0);
    return UpdateVirtualRouterRequestBodySpec;
}(SpeakeasyBase));
export { UpdateVirtualRouterRequestBodySpec };
var UpdateVirtualRouterRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterRequestBody, _super);
    function UpdateVirtualRouterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateVirtualRouterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", UpdateVirtualRouterRequestBodySpec)
    ], UpdateVirtualRouterRequestBody.prototype, "spec", void 0);
    return UpdateVirtualRouterRequestBody;
}(SpeakeasyBase));
export { UpdateVirtualRouterRequestBody };
var UpdateVirtualRouterRequest = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterRequest, _super);
    function UpdateVirtualRouterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualRouterPathParams)
    ], UpdateVirtualRouterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualRouterHeaders)
    ], UpdateVirtualRouterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVirtualRouterRequestBody)
    ], UpdateVirtualRouterRequest.prototype, "request", void 0);
    return UpdateVirtualRouterRequest;
}(SpeakeasyBase));
export { UpdateVirtualRouterRequest };
var UpdateVirtualRouterResponse = /** @class */ (function (_super) {
    __extends(UpdateVirtualRouterResponse, _super);
    function UpdateVirtualRouterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVirtualRouterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVirtualRouterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualRouterResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateVirtualRouterOutput)
    ], UpdateVirtualRouterResponse.prototype, "updateVirtualRouterOutput", void 0);
    return UpdateVirtualRouterResponse;
}(SpeakeasyBase));
export { UpdateVirtualRouterResponse };
