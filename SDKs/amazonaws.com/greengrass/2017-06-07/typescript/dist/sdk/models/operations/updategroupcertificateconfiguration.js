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
var UpdateGroupCertificateConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationPathParams, _super);
    function UpdateGroupCertificateConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationPathParams.prototype, "groupId", void 0);
    return UpdateGroupCertificateConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateGroupCertificateConfigurationPathParams };
var UpdateGroupCertificateConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationHeaders, _super);
    function UpdateGroupCertificateConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGroupCertificateConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateGroupCertificateConfigurationHeaders };
var UpdateGroupCertificateConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationRequestBody, _super);
    function UpdateGroupCertificateConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateExpiryInMilliseconds" }),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationRequestBody.prototype, "certificateExpiryInMilliseconds", void 0);
    return UpdateGroupCertificateConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateGroupCertificateConfigurationRequestBody };
var UpdateGroupCertificateConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationRequest, _super);
    function UpdateGroupCertificateConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupCertificateConfigurationPathParams)
    ], UpdateGroupCertificateConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupCertificateConfigurationHeaders)
    ], UpdateGroupCertificateConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGroupCertificateConfigurationRequestBody)
    ], UpdateGroupCertificateConfigurationRequest.prototype, "request", void 0);
    return UpdateGroupCertificateConfigurationRequest;
}(SpeakeasyBase));
export { UpdateGroupCertificateConfigurationRequest };
var UpdateGroupCertificateConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationResponse, _super);
    function UpdateGroupCertificateConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGroupCertificateConfigurationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupCertificateConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGroupCertificateConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupCertificateConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateGroupCertificateConfigurationResponse)
    ], UpdateGroupCertificateConfigurationResponse.prototype, "updateGroupCertificateConfigurationResponse", void 0);
    return UpdateGroupCertificateConfigurationResponse;
}(SpeakeasyBase));
export { UpdateGroupCertificateConfigurationResponse };
