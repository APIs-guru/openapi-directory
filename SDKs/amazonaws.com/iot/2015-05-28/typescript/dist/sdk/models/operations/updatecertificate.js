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
var UpdateCertificatePathParams = /** @class */ (function (_super) {
    __extends(UpdateCertificatePathParams, _super);
    function UpdateCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], UpdateCertificatePathParams.prototype, "certificateId", void 0);
    return UpdateCertificatePathParams;
}(SpeakeasyBase));
export { UpdateCertificatePathParams };
export var UpdateCertificateNewStatusEnum;
(function (UpdateCertificateNewStatusEnum) {
    UpdateCertificateNewStatusEnum["Active"] = "ACTIVE";
    UpdateCertificateNewStatusEnum["Inactive"] = "INACTIVE";
    UpdateCertificateNewStatusEnum["Revoked"] = "REVOKED";
    UpdateCertificateNewStatusEnum["PendingTransfer"] = "PENDING_TRANSFER";
    UpdateCertificateNewStatusEnum["RegisterInactive"] = "REGISTER_INACTIVE";
    UpdateCertificateNewStatusEnum["PendingActivation"] = "PENDING_ACTIVATION";
})(UpdateCertificateNewStatusEnum || (UpdateCertificateNewStatusEnum = {}));
var UpdateCertificateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateCertificateQueryParams, _super);
    function UpdateCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newStatus" }),
        __metadata("design:type", String)
    ], UpdateCertificateQueryParams.prototype, "newStatus", void 0);
    return UpdateCertificateQueryParams;
}(SpeakeasyBase));
export { UpdateCertificateQueryParams };
var UpdateCertificateHeaders = /** @class */ (function (_super) {
    __extends(UpdateCertificateHeaders, _super);
    function UpdateCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCertificateHeaders;
}(SpeakeasyBase));
export { UpdateCertificateHeaders };
var UpdateCertificateRequest = /** @class */ (function (_super) {
    __extends(UpdateCertificateRequest, _super);
    function UpdateCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCertificatePathParams)
    ], UpdateCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCertificateQueryParams)
    ], UpdateCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCertificateHeaders)
    ], UpdateCertificateRequest.prototype, "headers", void 0);
    return UpdateCertificateRequest;
}(SpeakeasyBase));
export { UpdateCertificateRequest };
var UpdateCertificateResponse = /** @class */ (function (_super) {
    __extends(UpdateCertificateResponse, _super);
    function UpdateCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "certificateStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCertificateResponse.prototype, "unauthorizedException", void 0);
    return UpdateCertificateResponse;
}(SpeakeasyBase));
export { UpdateCertificateResponse };
