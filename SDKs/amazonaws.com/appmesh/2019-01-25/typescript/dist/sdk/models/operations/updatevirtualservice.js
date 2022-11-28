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
var UpdateVirtualServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualServicePathParams, _super);
    function UpdateVirtualServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateVirtualServicePathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualServiceName" }),
        __metadata("design:type", String)
    ], UpdateVirtualServicePathParams.prototype, "virtualServiceName", void 0);
    return UpdateVirtualServicePathParams;
}(SpeakeasyBase));
export { UpdateVirtualServicePathParams };
var UpdateVirtualServiceQueryParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceQueryParams, _super);
    function UpdateVirtualServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceQueryParams.prototype, "meshOwner", void 0);
    return UpdateVirtualServiceQueryParams;
}(SpeakeasyBase));
export { UpdateVirtualServiceQueryParams };
var UpdateVirtualServiceHeaders = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceHeaders, _super);
    function UpdateVirtualServiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVirtualServiceHeaders;
}(SpeakeasyBase));
export { UpdateVirtualServiceHeaders };
// UpdateVirtualServiceRequestBodySpec
/**
 * An object that represents the specification of a virtual service.
**/
var UpdateVirtualServiceRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequestBodySpec, _super);
    function UpdateVirtualServiceRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", shared.VirtualServiceProvider)
    ], UpdateVirtualServiceRequestBodySpec.prototype, "provider", void 0);
    return UpdateVirtualServiceRequestBodySpec;
}(SpeakeasyBase));
export { UpdateVirtualServiceRequestBodySpec };
var UpdateVirtualServiceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequestBody, _super);
    function UpdateVirtualServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", UpdateVirtualServiceRequestBodySpec)
    ], UpdateVirtualServiceRequestBody.prototype, "spec", void 0);
    return UpdateVirtualServiceRequestBody;
}(SpeakeasyBase));
export { UpdateVirtualServiceRequestBody };
var UpdateVirtualServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequest, _super);
    function UpdateVirtualServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualServicePathParams)
    ], UpdateVirtualServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualServiceQueryParams)
    ], UpdateVirtualServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVirtualServiceHeaders)
    ], UpdateVirtualServiceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVirtualServiceRequestBody)
    ], UpdateVirtualServiceRequest.prototype, "request", void 0);
    return UpdateVirtualServiceRequest;
}(SpeakeasyBase));
export { UpdateVirtualServiceRequest };
var UpdateVirtualServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceResponse, _super);
    function UpdateVirtualServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVirtualServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVirtualServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateVirtualServiceOutput)
    ], UpdateVirtualServiceResponse.prototype, "updateVirtualServiceOutput", void 0);
    return UpdateVirtualServiceResponse;
}(SpeakeasyBase));
export { UpdateVirtualServiceResponse };
