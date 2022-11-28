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
var CreateDomainConfigurationPathParams = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationPathParams, _super);
    function CreateDomainConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationPathParams.prototype, "domainConfigurationName", void 0);
    return CreateDomainConfigurationPathParams;
}(SpeakeasyBase));
export { CreateDomainConfigurationPathParams };
var CreateDomainConfigurationHeaders = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationHeaders, _super);
    function CreateDomainConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDomainConfigurationHeaders;
}(SpeakeasyBase));
export { CreateDomainConfigurationHeaders };
// CreateDomainConfigurationRequestBodyAuthorizerConfig
/**
 * An object that specifies the authorization service for a domain.
**/
var CreateDomainConfigurationRequestBodyAuthorizerConfig = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationRequestBodyAuthorizerConfig, _super);
    function CreateDomainConfigurationRequestBodyAuthorizerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAuthorizerOverride" }),
        __metadata("design:type", Boolean)
    ], CreateDomainConfigurationRequestBodyAuthorizerConfig.prototype, "allowAuthorizerOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAuthorizerName" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationRequestBodyAuthorizerConfig.prototype, "defaultAuthorizerName", void 0);
    return CreateDomainConfigurationRequestBodyAuthorizerConfig;
}(SpeakeasyBase));
export { CreateDomainConfigurationRequestBodyAuthorizerConfig };
export var CreateDomainConfigurationRequestBodyServiceTypeEnum;
(function (CreateDomainConfigurationRequestBodyServiceTypeEnum) {
    CreateDomainConfigurationRequestBodyServiceTypeEnum["Data"] = "DATA";
    CreateDomainConfigurationRequestBodyServiceTypeEnum["CredentialProvider"] = "CREDENTIAL_PROVIDER";
    CreateDomainConfigurationRequestBodyServiceTypeEnum["Jobs"] = "JOBS";
})(CreateDomainConfigurationRequestBodyServiceTypeEnum || (CreateDomainConfigurationRequestBodyServiceTypeEnum = {}));
var CreateDomainConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationRequestBody, _super);
    function CreateDomainConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerConfig" }),
        __metadata("design:type", CreateDomainConfigurationRequestBodyAuthorizerConfig)
    ], CreateDomainConfigurationRequestBody.prototype, "authorizerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationRequestBody.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCertificateArns" }),
        __metadata("design:type", Array)
    ], CreateDomainConfigurationRequestBody.prototype, "serverCertificateArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationRequestBody.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDomainConfigurationRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationCertificateArn" }),
        __metadata("design:type", String)
    ], CreateDomainConfigurationRequestBody.prototype, "validationCertificateArn", void 0);
    return CreateDomainConfigurationRequestBody;
}(SpeakeasyBase));
export { CreateDomainConfigurationRequestBody };
var CreateDomainConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationRequest, _super);
    function CreateDomainConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainConfigurationPathParams)
    ], CreateDomainConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainConfigurationHeaders)
    ], CreateDomainConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDomainConfigurationRequestBody)
    ], CreateDomainConfigurationRequest.prototype, "request", void 0);
    return CreateDomainConfigurationRequest;
}(SpeakeasyBase));
export { CreateDomainConfigurationRequest };
var CreateDomainConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationResponse, _super);
    function CreateDomainConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomainConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDomainConfigurationResponse)
    ], CreateDomainConfigurationResponse.prototype, "createDomainConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomainConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainConfigurationResponse.prototype, "unauthorizedException", void 0);
    return CreateDomainConfigurationResponse;
}(SpeakeasyBase));
export { CreateDomainConfigurationResponse };
