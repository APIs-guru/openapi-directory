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
var RegisterCertificateWithoutCaHeaders = /** @class */ (function (_super) {
    __extends(RegisterCertificateWithoutCaHeaders, _super);
    function RegisterCertificateWithoutCaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterCertificateWithoutCaHeaders;
}(SpeakeasyBase));
export { RegisterCertificateWithoutCaHeaders };
export var RegisterCertificateWithoutCaRequestBodyStatusEnum;
(function (RegisterCertificateWithoutCaRequestBodyStatusEnum) {
    RegisterCertificateWithoutCaRequestBodyStatusEnum["Active"] = "ACTIVE";
    RegisterCertificateWithoutCaRequestBodyStatusEnum["Inactive"] = "INACTIVE";
    RegisterCertificateWithoutCaRequestBodyStatusEnum["Revoked"] = "REVOKED";
    RegisterCertificateWithoutCaRequestBodyStatusEnum["PendingTransfer"] = "PENDING_TRANSFER";
    RegisterCertificateWithoutCaRequestBodyStatusEnum["RegisterInactive"] = "REGISTER_INACTIVE";
    RegisterCertificateWithoutCaRequestBodyStatusEnum["PendingActivation"] = "PENDING_ACTIVATION";
})(RegisterCertificateWithoutCaRequestBodyStatusEnum || (RegisterCertificateWithoutCaRequestBodyStatusEnum = {}));
var RegisterCertificateWithoutCaRequestBody = /** @class */ (function (_super) {
    __extends(RegisterCertificateWithoutCaRequestBody, _super);
    function RegisterCertificateWithoutCaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePem" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaRequestBody.prototype, "certificatePem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaRequestBody.prototype, "status", void 0);
    return RegisterCertificateWithoutCaRequestBody;
}(SpeakeasyBase));
export { RegisterCertificateWithoutCaRequestBody };
var RegisterCertificateWithoutCaRequest = /** @class */ (function (_super) {
    __extends(RegisterCertificateWithoutCaRequest, _super);
    function RegisterCertificateWithoutCaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegisterCertificateWithoutCaHeaders)
    ], RegisterCertificateWithoutCaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterCertificateWithoutCaRequestBody)
    ], RegisterCertificateWithoutCaRequest.prototype, "request", void 0);
    return RegisterCertificateWithoutCaRequest;
}(SpeakeasyBase));
export { RegisterCertificateWithoutCaRequest };
var RegisterCertificateWithoutCaResponse = /** @class */ (function (_super) {
    __extends(RegisterCertificateWithoutCaResponse, _super);
    function RegisterCertificateWithoutCaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "certificateStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegisterCertificateWithoutCaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterCertificateWithoutCaResponse)
    ], RegisterCertificateWithoutCaResponse.prototype, "registerCertificateWithoutCaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegisterCertificateWithoutCaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RegisterCertificateWithoutCaResponse.prototype, "unauthorizedException", void 0);
    return RegisterCertificateWithoutCaResponse;
}(SpeakeasyBase));
export { RegisterCertificateWithoutCaResponse };
