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
var CreateVirtualRouterPathParams = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterPathParams, _super);
    function CreateVirtualRouterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterPathParams.prototype, "meshName", void 0);
    return CreateVirtualRouterPathParams;
}(SpeakeasyBase));
export { CreateVirtualRouterPathParams };
var CreateVirtualRouterHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterHeaders, _super);
    function CreateVirtualRouterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualRouterHeaders;
}(SpeakeasyBase));
export { CreateVirtualRouterHeaders };
// CreateVirtualRouterRequestBodySpec
/**
 * An object representing the specification of a virtual router.
**/
var CreateVirtualRouterRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequestBodySpec, _super);
    function CreateVirtualRouterRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceNames" }),
        __metadata("design:type", Array)
    ], CreateVirtualRouterRequestBodySpec.prototype, "serviceNames", void 0);
    return CreateVirtualRouterRequestBodySpec;
}(SpeakeasyBase));
export { CreateVirtualRouterRequestBodySpec };
var CreateVirtualRouterRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequestBody, _super);
    function CreateVirtualRouterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", CreateVirtualRouterRequestBodySpec)
    ], CreateVirtualRouterRequestBody.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualRouterName" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequestBody.prototype, "virtualRouterName", void 0);
    return CreateVirtualRouterRequestBody;
}(SpeakeasyBase));
export { CreateVirtualRouterRequestBody };
var CreateVirtualRouterRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequest, _super);
    function CreateVirtualRouterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualRouterPathParams)
    ], CreateVirtualRouterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualRouterHeaders)
    ], CreateVirtualRouterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualRouterRequestBody)
    ], CreateVirtualRouterRequest.prototype, "request", void 0);
    return CreateVirtualRouterRequest;
}(SpeakeasyBase));
export { CreateVirtualRouterRequest };
var CreateVirtualRouterResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterResponse, _super);
    function CreateVirtualRouterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVirtualRouterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateVirtualRouterOutput)
    ], CreateVirtualRouterResponse.prototype, "createVirtualRouterOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVirtualRouterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualRouterResponse;
}(SpeakeasyBase));
export { CreateVirtualRouterResponse };
