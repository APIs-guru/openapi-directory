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
var UpdateDomainConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationPathParams, _super);
    function UpdateDomainConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationPathParams.prototype, "domainConfigurationName", void 0);
    return UpdateDomainConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateDomainConfigurationPathParams };
var UpdateDomainConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationHeaders, _super);
    function UpdateDomainConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDomainConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateDomainConfigurationHeaders };
// UpdateDomainConfigurationRequestBodyAuthorizerConfig
/**
 * An object that specifies the authorization service for a domain.
**/
var UpdateDomainConfigurationRequestBodyAuthorizerConfig = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationRequestBodyAuthorizerConfig, _super);
    function UpdateDomainConfigurationRequestBodyAuthorizerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAuthorizerOverride" }),
        __metadata("design:type", Boolean)
    ], UpdateDomainConfigurationRequestBodyAuthorizerConfig.prototype, "allowAuthorizerOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAuthorizerName" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationRequestBodyAuthorizerConfig.prototype, "defaultAuthorizerName", void 0);
    return UpdateDomainConfigurationRequestBodyAuthorizerConfig;
}(SpeakeasyBase));
export { UpdateDomainConfigurationRequestBodyAuthorizerConfig };
export var UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;
(function (UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum) {
    UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum["Enabled"] = "ENABLED";
    UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum["Disabled"] = "DISABLED";
})(UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum || (UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum = {}));
var UpdateDomainConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationRequestBody, _super);
    function UpdateDomainConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerConfig" }),
        __metadata("design:type", UpdateDomainConfigurationRequestBodyAuthorizerConfig)
    ], UpdateDomainConfigurationRequestBody.prototype, "authorizerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainConfigurationStatus" }),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationRequestBody.prototype, "domainConfigurationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeAuthorizerConfig" }),
        __metadata("design:type", Boolean)
    ], UpdateDomainConfigurationRequestBody.prototype, "removeAuthorizerConfig", void 0);
    return UpdateDomainConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateDomainConfigurationRequestBody };
var UpdateDomainConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationRequest, _super);
    function UpdateDomainConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainConfigurationPathParams)
    ], UpdateDomainConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainConfigurationHeaders)
    ], UpdateDomainConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDomainConfigurationRequestBody)
    ], UpdateDomainConfigurationRequest.prototype, "request", void 0);
    return UpdateDomainConfigurationRequest;
}(SpeakeasyBase));
export { UpdateDomainConfigurationRequest };
var UpdateDomainConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationResponse, _super);
    function UpdateDomainConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainConfigurationResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDomainConfigurationResponse)
    ], UpdateDomainConfigurationResponse.prototype, "updateDomainConfigurationResponse", void 0);
    return UpdateDomainConfigurationResponse;
}(SpeakeasyBase));
export { UpdateDomainConfigurationResponse };
