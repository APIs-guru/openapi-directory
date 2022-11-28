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
var CreateBackendAuthPathParams = /** @class */ (function (_super) {
    __extends(CreateBackendAuthPathParams, _super);
    function CreateBackendAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendAuthPathParams.prototype, "appId", void 0);
    return CreateBackendAuthPathParams;
}(SpeakeasyBase));
export { CreateBackendAuthPathParams };
var CreateBackendAuthHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendAuthHeaders, _super);
    function CreateBackendAuthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendAuthHeaders;
}(SpeakeasyBase));
export { CreateBackendAuthHeaders };
// CreateBackendAuthRequestBodyResourceConfig
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfig, _super);
    function CreateBackendAuthRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthResources" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "authResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" }),
        __metadata("design:type", shared.CreateBackendAuthIdentityPoolConfig)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "identityPoolConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" }),
        __metadata("design:type", shared.CreateBackendAuthUserPoolConfig)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "userPoolConfigs", void 0);
    return CreateBackendAuthRequestBodyResourceConfig;
}(SpeakeasyBase));
export { CreateBackendAuthRequestBodyResourceConfig };
var CreateBackendAuthRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBody, _super);
    function CreateBackendAuthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBody.prototype, "backendEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfig)
    ], CreateBackendAuthRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBody.prototype, "resourceName", void 0);
    return CreateBackendAuthRequestBody;
}(SpeakeasyBase));
export { CreateBackendAuthRequestBody };
var CreateBackendAuthRequest = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequest, _super);
    function CreateBackendAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBackendAuthPathParams)
    ], CreateBackendAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBackendAuthHeaders)
    ], CreateBackendAuthRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendAuthRequestBody)
    ], CreateBackendAuthRequest.prototype, "request", void 0);
    return CreateBackendAuthRequest;
}(SpeakeasyBase));
export { CreateBackendAuthRequest };
var CreateBackendAuthResponse = /** @class */ (function (_super) {
    __extends(CreateBackendAuthResponse, _super);
    function CreateBackendAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBackendAuthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBackendAuthResponse)
    ], CreateBackendAuthResponse.prototype, "createBackendAuthResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBackendAuthResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "tooManyRequestsException", void 0);
    return CreateBackendAuthResponse;
}(SpeakeasyBase));
export { CreateBackendAuthResponse };
