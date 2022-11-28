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
var RegisterCertificateQueryParams = /** @class */ (function (_super) {
    __extends(RegisterCertificateQueryParams, _super);
    function RegisterCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsActive" }),
        __metadata("design:type", Boolean)
    ], RegisterCertificateQueryParams.prototype, "setAsActive", void 0);
    return RegisterCertificateQueryParams;
}(SpeakeasyBase));
export { RegisterCertificateQueryParams };
var RegisterCertificateHeaders = /** @class */ (function (_super) {
    __extends(RegisterCertificateHeaders, _super);
    function RegisterCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterCertificateHeaders;
}(SpeakeasyBase));
export { RegisterCertificateHeaders };
export var RegisterCertificateRequestBodyStatusEnum;
(function (RegisterCertificateRequestBodyStatusEnum) {
    RegisterCertificateRequestBodyStatusEnum["Active"] = "ACTIVE";
    RegisterCertificateRequestBodyStatusEnum["Inactive"] = "INACTIVE";
    RegisterCertificateRequestBodyStatusEnum["Revoked"] = "REVOKED";
    RegisterCertificateRequestBodyStatusEnum["PendingTransfer"] = "PENDING_TRANSFER";
    RegisterCertificateRequestBodyStatusEnum["RegisterInactive"] = "REGISTER_INACTIVE";
    RegisterCertificateRequestBodyStatusEnum["PendingActivation"] = "PENDING_ACTIVATION";
})(RegisterCertificateRequestBodyStatusEnum || (RegisterCertificateRequestBodyStatusEnum = {}));
var RegisterCertificateRequestBody = /** @class */ (function (_super) {
    __extends(RegisterCertificateRequestBody, _super);
    function RegisterCertificateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificatePem" }),
        __metadata("design:type", String)
    ], RegisterCertificateRequestBody.prototype, "caCertificatePem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePem" }),
        __metadata("design:type", String)
    ], RegisterCertificateRequestBody.prototype, "certificatePem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RegisterCertificateRequestBody.prototype, "status", void 0);
    return RegisterCertificateRequestBody;
}(SpeakeasyBase));
export { RegisterCertificateRequestBody };
var RegisterCertificateRequest = /** @class */ (function (_super) {
    __extends(RegisterCertificateRequest, _super);
    function RegisterCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterCertificateQueryParams)
    ], RegisterCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterCertificateHeaders)
    ], RegisterCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterCertificateRequestBody)
    ], RegisterCertificateRequest.prototype, "request", void 0);
    return RegisterCertificateRequest;
}(SpeakeasyBase));
export { RegisterCertificateRequest };
var RegisterCertificateResponse = /** @class */ (function (_super) {
    __extends(RegisterCertificateResponse, _super);
    function RegisterCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "certificateConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "certificateStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterCertificateResponse)
    ], RegisterCertificateResponse.prototype, "registerCertificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateResponse.prototype, "unauthorizedException", void 0);
    return RegisterCertificateResponse;
}(SpeakeasyBase));
export { RegisterCertificateResponse };
