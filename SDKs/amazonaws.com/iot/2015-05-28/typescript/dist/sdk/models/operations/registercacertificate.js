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
var RegisterCaCertificateQueryParams = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateQueryParams, _super);
    function RegisterCaCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAutoRegistration" }),
        __metadata("design:type", Boolean)
    ], RegisterCaCertificateQueryParams.prototype, "allowAutoRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsActive" }),
        __metadata("design:type", Boolean)
    ], RegisterCaCertificateQueryParams.prototype, "setAsActive", void 0);
    return RegisterCaCertificateQueryParams;
}(SpeakeasyBase));
export { RegisterCaCertificateQueryParams };
var RegisterCaCertificateHeaders = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateHeaders, _super);
    function RegisterCaCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterCaCertificateHeaders;
}(SpeakeasyBase));
export { RegisterCaCertificateHeaders };
// RegisterCaCertificateRequestBodyRegistrationConfig
/**
 * The registration configuration.
**/
var RegisterCaCertificateRequestBodyRegistrationConfig = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateRequestBodyRegistrationConfig, _super);
    function RegisterCaCertificateRequestBodyRegistrationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateRequestBodyRegistrationConfig.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateRequestBodyRegistrationConfig.prototype, "templateBody", void 0);
    return RegisterCaCertificateRequestBodyRegistrationConfig;
}(SpeakeasyBase));
export { RegisterCaCertificateRequestBodyRegistrationConfig };
var RegisterCaCertificateRequestBody = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateRequestBody, _super);
    function RegisterCaCertificateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificate" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateRequestBody.prototype, "caCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationConfig" }),
        __metadata("design:type", RegisterCaCertificateRequestBodyRegistrationConfig)
    ], RegisterCaCertificateRequestBody.prototype, "registrationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], RegisterCaCertificateRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationCertificate" }),
        __metadata("design:type", String)
    ], RegisterCaCertificateRequestBody.prototype, "verificationCertificate", void 0);
    return RegisterCaCertificateRequestBody;
}(SpeakeasyBase));
export { RegisterCaCertificateRequestBody };
var RegisterCaCertificateRequest = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateRequest, _super);
    function RegisterCaCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterCaCertificateQueryParams)
    ], RegisterCaCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterCaCertificateHeaders)
    ], RegisterCaCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterCaCertificateRequestBody)
    ], RegisterCaCertificateRequest.prototype, "request", void 0);
    return RegisterCaCertificateRequest;
}(SpeakeasyBase));
export { RegisterCaCertificateRequest };
var RegisterCaCertificateResponse = /** @class */ (function (_super) {
    __extends(RegisterCaCertificateResponse, _super);
    function RegisterCaCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterCaCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterCaCertificateResponse)
    ], RegisterCaCertificateResponse.prototype, "registerCaCertificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "registrationCodeValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterCaCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCaCertificateResponse.prototype, "unauthorizedException", void 0);
    return RegisterCaCertificateResponse;
}(SpeakeasyBase));
export { RegisterCaCertificateResponse };
