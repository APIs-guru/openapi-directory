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
var UpdateCaCertificatePathParams = /** @class */ (function (_super) {
    __extends(UpdateCaCertificatePathParams, _super);
    function UpdateCaCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=caCertificateId" }),
        __metadata("design:type", String)
    ], UpdateCaCertificatePathParams.prototype, "caCertificateId", void 0);
    return UpdateCaCertificatePathParams;
}(SpeakeasyBase));
export { UpdateCaCertificatePathParams };
export var UpdateCaCertificateNewAutoRegistrationStatusEnum;
(function (UpdateCaCertificateNewAutoRegistrationStatusEnum) {
    UpdateCaCertificateNewAutoRegistrationStatusEnum["Enable"] = "ENABLE";
    UpdateCaCertificateNewAutoRegistrationStatusEnum["Disable"] = "DISABLE";
})(UpdateCaCertificateNewAutoRegistrationStatusEnum || (UpdateCaCertificateNewAutoRegistrationStatusEnum = {}));
export var UpdateCaCertificateNewStatusEnum;
(function (UpdateCaCertificateNewStatusEnum) {
    UpdateCaCertificateNewStatusEnum["Active"] = "ACTIVE";
    UpdateCaCertificateNewStatusEnum["Inactive"] = "INACTIVE";
})(UpdateCaCertificateNewStatusEnum || (UpdateCaCertificateNewStatusEnum = {}));
var UpdateCaCertificateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateQueryParams, _super);
    function UpdateCaCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newAutoRegistrationStatus" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateQueryParams.prototype, "newAutoRegistrationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newStatus" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateQueryParams.prototype, "newStatus", void 0);
    return UpdateCaCertificateQueryParams;
}(SpeakeasyBase));
export { UpdateCaCertificateQueryParams };
var UpdateCaCertificateHeaders = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateHeaders, _super);
    function UpdateCaCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCaCertificateHeaders;
}(SpeakeasyBase));
export { UpdateCaCertificateHeaders };
// UpdateCaCertificateRequestBodyRegistrationConfig
/**
 * The registration configuration.
**/
var UpdateCaCertificateRequestBodyRegistrationConfig = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateRequestBodyRegistrationConfig, _super);
    function UpdateCaCertificateRequestBodyRegistrationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateRequestBodyRegistrationConfig.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], UpdateCaCertificateRequestBodyRegistrationConfig.prototype, "templateBody", void 0);
    return UpdateCaCertificateRequestBodyRegistrationConfig;
}(SpeakeasyBase));
export { UpdateCaCertificateRequestBodyRegistrationConfig };
var UpdateCaCertificateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateRequestBody, _super);
    function UpdateCaCertificateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationConfig" }),
        __metadata("design:type", UpdateCaCertificateRequestBodyRegistrationConfig)
    ], UpdateCaCertificateRequestBody.prototype, "registrationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeAutoRegistration" }),
        __metadata("design:type", Boolean)
    ], UpdateCaCertificateRequestBody.prototype, "removeAutoRegistration", void 0);
    return UpdateCaCertificateRequestBody;
}(SpeakeasyBase));
export { UpdateCaCertificateRequestBody };
var UpdateCaCertificateRequest = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateRequest, _super);
    function UpdateCaCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCaCertificatePathParams)
    ], UpdateCaCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCaCertificateQueryParams)
    ], UpdateCaCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCaCertificateHeaders)
    ], UpdateCaCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCaCertificateRequestBody)
    ], UpdateCaCertificateRequest.prototype, "request", void 0);
    return UpdateCaCertificateRequest;
}(SpeakeasyBase));
export { UpdateCaCertificateRequest };
var UpdateCaCertificateResponse = /** @class */ (function (_super) {
    __extends(UpdateCaCertificateResponse, _super);
    function UpdateCaCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCaCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCaCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCaCertificateResponse.prototype, "unauthorizedException", void 0);
    return UpdateCaCertificateResponse;
}(SpeakeasyBase));
export { UpdateCaCertificateResponse };
